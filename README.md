# vscode flow with heavy docker-compose proof of concept

1. Run `docker-compose up`.

2. Open a vscode and in command palette (cmd + shift + p) select "Remote-Containers: Attach to Running Container..." and select the name of the container with the app.

3. Install needed plugins such as "esbenp.prettier-vscode" and "ms-vscode.js-debug-nightly".

4. "Format Document" command should work well.

5. Run "Debug: Attach to Node Process" in command palette and select the right process (pid: 1). Now you can use breakpoints and debug the app.

`node_modules` folder is not exposed to local disk but you can see it in vscode since we attached to a container.

Since `node_modules` is not synced with local disk, processes in docker (node, npm, etc.) run much faster.