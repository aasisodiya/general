# SQL Notes

- [SQL Notes](#sql-notes)
  - [Checking and Disposing Idle Connection (Postgres)](#checking-and-disposing-idle-connection-postgres)
  - [SQL code to convert a string column to date type (MariaDB)](#sql-code-to-convert-a-string-column-to-date-type-mariadb)
  - [Reference](#reference)

## Checking and Disposing Idle Connection (Postgres)

Use below command to check number of connections

```sql
select count(*) FROM pg_stat_activity ;
```

Use below command to check number of `idle` state connections

```sql
select count(*) FROM pg_stat_activity WHERE state = 'idle';
```

Use below command to check number of connections established by `application_name` i.e. `demoapp`

```sql
SELECT count(*) FROM pg_stat_activity where application_name = 'demoapp';
```

Use below command to check count of states for an application_name in descending order

```sql
SELECT application_name, state, count(*) as cnt FROM pg_stat_activity group by application_name, state order by cnt desc;
```

Use below command `pg_terminate_backend(25263)` to terminate the connection with pid of `6969`

```sql
SELECT
    pg_terminate_backend(6969)
FROM
    pg_stat_activity;
```

Just to be safe an not terminate your own connection, you can instead use below command

```sql
SELECT
    pg_terminate_backend(6969)
FROM
    pg_stat_activity
WHERE
    pg_backend_pid() <> 6969;
```

Use below command to terminate idle connections

```sql
SELECT
    pg_terminate_backend(pid)
FROM
    pg_stat_activity
WHERE state = 'idle' and
    pg_backend_pid() <> pid;
```

Use below command to get count of different state

```sql
select state, count(*) from pg_stat_activity group by state;
```

Use below command to terminate idle connection from application_name as demoapp

```sql
SELECT
    pg_terminate_backend(pid)
FROM
    pg_stat_activity
WHERE pid in (SELECT pid FROM pg_stat_activity WHERE state = 'idle' AND application_name = 'demoapp');
```

##  SQL code to convert a string column to date type (MariaDB)

SQL code to convert a string column to date type column which already has a data for date in string format of `YYYY-MM-DD`

```sql
-- Step 1: Add a new column for the date
ALTER TABLE your_table_name ADD new_date_column DATE;

-- Step 2: Update the new column with converted dates from the string column
UPDATE your_table_name
SET new_date_column = STR_TO_DATE(old_date_column, '%Y-%m-%d');

-- Step 3: Drop the old string column if needed
ALTER TABLE your_table_name DROP COLUMN old_date_column;

-- Step 4: Rename the new date column to the original column name if needed
ALTER TABLE your_table CHANGE COLUMN new_date_column old_date_column DATE;
```

The update query in step 2 might fail if you have any invalid string or even `0000-00-00` value in it with error: `incorrect datetime value: '0000-00-00' for function str_to_date`. If that's the case you can use below query to clear those values

```sql
UPDATE your_table_name
SET string_date_column = NULL
WHERE string_date_column = '0000-00-00';
```

The update query might also fail if time format is different with error : `truncated incorrect date value '2020-10-23 16:12:34'`

```sql
UPDATE your_table_name
SET date_column = NULLIF(STR_TO_DATE(string_date_column, '%Y-%m-%d %H:%i:%s'), '0000-00-00 00:00:00');
```

## Reference

- [PostgreSQL Docs](https://www.postgresql.org/docs/9.4/functions-info.html)
