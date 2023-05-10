
import React, { useEffect, useState } from "react";

export function GitHubRepos() {
    const [repos, setRepos] = useState([])
    const API_GITHUB_REPOS = 'https://api.github.com/users/irynazelisko/repos'

    useEffect(() => {
        fetch(API_GITHUB_REPOS)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setRepos(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <h2 className="central-title central-border">GitHub Repositories</h2>
            <div id="repositories-list">
                {repos.map((repo) => (
                    <div key={repo.id} className="repo-id">
                        <a className="link-description" href={repo.html_url} >
                            {repo.full_name}
                        </a>
                        {repo.description !== null && (
                            <p className="repo-description">{repo.description}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
