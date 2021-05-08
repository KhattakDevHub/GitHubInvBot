/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");

  app.on("issues.opened", async (context) => {
    const invitee_id = context.payload.sender.id;
    const labels = context.payload.issue.labels;
    console.log("Send an Invitation to ", invitee_id);

    for (const iterator of labels) {
      if (iterator.name == "invitation request") {
        return context.octokit.orgs.createInvitation({
          org: "KhattakDevHub",
          invitee_id,
        });
      }
    }

    // console.log(context.payload.organization.id);
    // return context.octokit.orgs.createInvitation({

    // })
    // return context.octokit.issues.createComment(issueComment);
  });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
