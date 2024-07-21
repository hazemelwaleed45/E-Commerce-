const MyLibrary = {
    set: function (name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },

    get: function (name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },

    delete: function (name) {
        document.cookie = name + '=; Max-Age=-99999999;';
    },

    hasCookies: function (cookieName) {
        return this.get(cookieName) !== null;
    },

    reset: function () {
        const cookies = document.cookie.split("; ");
        for (const cookie of cookies) {
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    },

    getAllCookiesList: function () {
        const listCookies = {};
        const cookies = document.cookie.split(';');
        for (const cookie of cookies) {
            const parts = cookie.trim().split("=");
            listCookies[parts[0]] = parts[1];
        }
        return listCookies;
    }
};
