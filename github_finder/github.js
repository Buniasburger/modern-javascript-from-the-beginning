class Github {
    constructor(props) {
        this.client_id = '860d6045c38a0f5e390a';
        this.client_secret = '5e228760f3b2fe4f020d90760b4124eb1bb2d8c5';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


        return {
            profile: await profileResponse.json(),
            repos: await repoResponse.json()
        }
    }
}