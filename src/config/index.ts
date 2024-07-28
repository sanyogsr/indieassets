export const PRODUCT_CATEGORIES = [
    {
        label: "Ui Kits",
        value: "ui_kits" as const,
        featured:[
            {
                name: "Editor picks",
                href:"#",
                imageSrc:"/nav/ui-kits/mixed.jpg"
            },
            {
                name: "Editor picks",
                href:"#",
                imageSrc:"/nav/ui-kits/blue.jpg"
            },
            {
                name: "Editor picks",
                href:"#",
                imageSrc:"/nav/ui-kits/purple.jpg"
            }
        ]
    },
    {
        label: "Icons",
        value: "icons" as const,
        featured:[
            {
                name: "Bestselling",
                href:"#",
                imageSrc:"/nav/icons/bestsellers.jpg"
            },
            {
                name: "New Arrivals",
                href:"#",
                imageSrc:"/nav/icons/new.jpg"
            },
            {
                name: "Favourite Icon picks",
                href:"#",
                imageSrc:"/nav/icons/picks.jpg"
            }
        ]
    }
]