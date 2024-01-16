export const adminMenu = [
    { //hệ thống
        name: 'menu.user.header', menus: [
            {
                name: 'menu.user.crud-user', link: "/system/crud-user"
            },
            {
                name: "menu.user.crud-redux", link: "/system/crud-user",
            },
            {
                name: "menu.user.manage-doctor", link: "system/manage-doctor",
            },
            {
                name: "menu.user.manage-admin", link: "system/manage-admin"
            }
            // { name: 'menu.user.system.system-parameter.header', link: '/system/system-parameter' },
        ]
    },
];
export const clinicsMenu = [
    { //hệ thống
        name: 'menu.clinics.header', menus: [
            {
                name: 'menu.clinics.manage-clinics', link: "/system/manage-clinics"
            }
            // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
        ]
    },
];
export const specialityMenu = [
    { //hệ thống
        name: 'menu.specialty.header', menus: [
            {
                name: 'menu.specialty.manage-specialty', link: "/system/manage-speicialty"
            }
            // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
        ]
    },
];
export const handbookMenu = [
    { //hệ thống
        name: 'menu.handbook.header', menus: [
            {
                name: 'menu.handbook.manage-handbook', link: "/system/manage-handbook"
            }
            // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
        ]
    },
];