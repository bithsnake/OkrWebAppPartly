export const run = {
    SetDeviceText: (screenWidth : number) => {
        return screenWidth >= 320 && screenWidth <= 767
        ? "Smartphones (portrait & landascape)"
        : screenWidth >= 768 && screenWidth <= 1023
        ? "iPads (portrait & landascape)"
        : screenWidth >= 1024 && screenWidth <= 1440
        ? "Desktops and laptops"
        : "4k Screens";      
    }
};