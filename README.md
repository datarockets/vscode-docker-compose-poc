# vscode flow with heavy docker-compose proof of concept

## Node.js

1. Install dependencies: `docker-compose run --rm app npm install`.

2. Run `docker-compose up`.

3. Open a vscode and in command palette (cmd + shift + p) select "Remote-Containers: Attach to Running Container..." and select the name of the container with the app.

4. Install needed extensions (even if you had them installed locally, you need to reinstall them within the container): "esbenp.prettier-vscode" and "ms-vscode.js-debug-nightly".

5. "Format Document" command should work well.

6. Run "Debug: Attach to Node Process" in command palette and select the right process (pid: 1). Now you can use breakpoints and debug the app.

`node_modules` folder is not exposed to local disk but you can see it in vscode since we attached to a container.

Since `node_modules` is not synced with local disk, processes in docker (node, npm, etc.) run much faster.

## Ruby

1. Install dependencies: `docker-compose run --rm app bundle install`.

2. Run `docker-compose up`.

3. Open a vscode and in command palette (cmd + shift + p) select "Remote-Containers: Attach to Running Container..." and select the name of the container with the app.

4. Install needed extension  (even if you had them installed locally, you need to reinstall them within the container): "rebornix.ruby".

5. Open debugger (cmd + shift + d) and run "Attach" command. You can now set breakpoints and debug the app.
