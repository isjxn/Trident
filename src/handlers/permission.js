class PermissionHandler {
    constructor() {
        this.levels = [{
                Name: 'Owner',
                lvl: Infinity,
                users: ['110220892096704512']
            },
            {
                Name: 'Administrator',
                lvl: 8,
                users: []
            },
            {
                Name: 'Moderator',
                lvl: 7,
                users: []
            },
            {
                Name: 'User',
                lvl: 1
            },
            {
                Name: 'Ignored',
                lvl: 0,
                users: []
            },
        ];
    }

    hasPermission(author, commandLevel) {
        let evaluation = false;

        this.levels.forEach((e) => {
            var users = e.users ? e.users : false;


            if (users && users.includes(author)) {
                if (e.lvl >= commandLevel) {
                    evaluation = true;
                }
            }
        });

        return evaluation;
    }
}

module.exports = new PermissionHandler();