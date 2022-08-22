# SQL Notes

- [SQL Notes](#sql-notes)
  - [Checking and Disposing Idle Connection (Postgres)](#checking-and-disposing-idle-connection-postgres)
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

## Reference

- [PostgreSQL Docs](https://www.postgresql.org/docs/9.4/functions-info.html)
