export const auth = {

    "get": () => {

        // console.log("clearing auth data")

        window.app_auth_data = null

    },

    "clear": () => {

        // console.log("clearing auth data")

        window.app_auth_data = null

    },

    "has": () => {

        // console.log(window.app_auth_data)

        if (
            typeof window.app_auth_data !== "undefined" &&
            window.app_auth_data !== null
        ) {

            return true

        }

        return false

    },

    "set": (auth_data) => {

        // console.log("Setting auth data to:", auth_data)

        window.app_auth_data = auth_data

    }

}
