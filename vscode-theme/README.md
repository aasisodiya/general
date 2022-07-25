# VSCode Theme

[![Visitors](https://api.visitorbadge.io/api/visitors?path=aasisodiya.general.vscode.theme&labelColor=%23ffa500&countColor=%23263759&labelStyle=upper)](https://visitorbadge.io/status?path=aasisodiya.general.vscode.theme)

## Prerequisites

- NodeJS
- Git
- [Azure DevOps Account](https://dev.azure.com/)

## Initial Steps To Follow

1. Create/Open Folder you want to work with, and open the same in your CMD
2. Now Install the Generator using command `npm install -g yo generator-code`
3. Run Yo Code using command `yo code`

   ```bash
   yo code
   ? ==========================================================================
   We're constantly looking for ways to make yo better!
   May we anonymously report usage statistics to improve the tool over time?
   More info: https://github.com/yeoman/insight & http://yeoman.io
   ========================================================================== No

        _-----_     ╭──────────────────────────╮
       |       |    │   Welcome to the Visual  │
       |--(o)--|    │   Studio Code Extension  │
      `---------´   │        generator!        │
       ( _´U`_ )    ╰──────────────────────────╯
       /___A___\   /
        |  ~  |
      __'.___.'__
    ´   `  |° ´ Y `

   ? What type of extension do you want to create? (Use arrow keys)
     New Extension (TypeScript)
     New Extension (JavaScript)
   > New Color Theme
     New Language Support
     New Code Snippets
     New Keymap
     New Extension Pack
     New Language Pack (Localization)
   ```

4. Select `New Color Theme` option

   ```bash
   ? Do you want to import or convert an existing TextMate color theme? (Use arrow keys)
   > No, start fresh
     Yes, import an existing theme but keep it as tmTheme file.
     Yes, import an existing theme and inline it in the Visual Studio Code color theme file.
   ```

5. Then Select `No, start fresh` Option
6. Enter the Extension Name
7. Enter your extension identifier
8. Enter Description
9. Enter Name of Your Theme shown to the user (ex. Extension Name)
10. Select a base theme (ex. Dark)
11. Choose to Initialize git repo and so on fill in other details

    ```bash
    ? What type of extension do you want to create? New Color Theme
    ? Do you want to import or convert an existing TextMate color theme? No, start fresh
    ? What's the name of your extension? frostfire-theme
    ? What's the identifier of your extension? forstfiretheme
    ? What's the description of your extension? FrostFire Theme
    ? What's the name of your theme shown to the user? FrostFire Theme
    ? Select a base theme: Dark
    ? Initialize a git repository? No
    ```

## Build The Theme

1. Open the new created folder with your given theme name `cd foldername`
2. Then Run `code .` which will open a new Window of VS Code Editor
3. Then, inside the editor, press `F5`. This will compile and run the extension in a new Extension Development Host window.
4. Simultaneously you can edit the `json` file inside `themes` folder with your theme name.
5. Save the file on changes, same will be reflected in new Extension Development Host window

> For Reference/Details on theme related parameters [click here](https://code.visualstudio.com/api/references/theme-color)

## Now For Sharing

1. When done creating your theme use command `npm install vsce -g` and install Visual Studio Code Extensions
2. Now if you have linked it with a repo then its file, else create a new github repo and push your code.
3. Now open `package.json` file and update all required data like repository url and type, icon and author. Just make sure all data is correct.
4. Now on [Azure DevOps](https://dev.azure.com/) and create your organization under which you will publish your extensions
5. Then Create a Personal Access Token (PAT) for `All Accessible Organizations`.
6. Create a Publisher using command `vsce create-publisher publisher-name` where `publisher-name` is your publisher-name or [use this link](https://marketplace.visualstudio.com/manage/createpublisher)
7. When done login to publisher using command `vsce login publisher-name` where `publisher-name` is your publisher-name
8. Then Package and Publish using command `vsce package` and `vsce publish`
9. You can check the status at [this link](https://marketplace.visualstudio.com/manage/publishers/)

## Reference

- [Yo Code - Extension and Customization Generator](https://www.npmjs.com/package/generator-code)
- [Yo Code](https://vscode.readthedocs.io/en/latest/extensions/yocode/)
- [Your First Extension](https://code.visualstudio.com/api/get-started/your-first-extension)

[![Visitors](https://api.visitorbadge.io/api/visitors?path=aasisodiya.general&label=aasisodiya/general&labelColor=%23ffa500&countColor=%23263759&labelStyle=upper)](https://visitorbadge.io/status?path=aasisodiya.general)
