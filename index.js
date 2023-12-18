import { getInput, setOutput, setFailed, error } from "@actions/core";
import { context, getOctokit } from "@actions/github";

try {
  const token = getInput("token");

  if (!token)
    error(
      "There is no Github Token provided. Please refer to the Prettier-Action Documentation for reference."
    );

  const octokit = getOctokit(token);

  // const owner = context.payload.repository.owner;
  const name = context.payload.repository.name;
  console.log(name, context.payload);

  const { data } = await octokit.rest.pulls.get({
    owner: "shahdivyank",
    repo: name,
    pull_number: 1,
  });

  console.log(data);
} catch (error) {
  setFailed(error.message);
}
