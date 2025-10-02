const useSubMenuToggle = () => {
    const toggleSubMenu = (e) => {
        e.preventDefault();
        const clickedItem = e.target.closest('li.dropdown');

        // Close all open dropdowns
        const allDropdowns = document.querySelectorAll('li.dropdown');
        allDropdowns.forEach((item) => {
            const submenu = item.querySelector('ul.dropdown-menu');
            if (item !== clickedItem) {
                item.classList.remove('on');
                if (submenu) submenu.style.maxHeight = '0';
            }
        });

        // Toggle current dropdown
        const subMenu = clickedItem.querySelector('ul.dropdown-menu');
        if (subMenu) {
            const isOpen = clickedItem.classList.contains('on');
            if (isOpen) {
                clickedItem.classList.remove('on');
                subMenu.style.maxHeight = '0';
            } else {
                clickedItem.classList.add('on');
                subMenu.style.maxHeight = '20000px'; // or use subMenu.scrollHeight + 'px'
            }
        }
    };

    return toggleSubMenu;
};

export default useSubMenuToggle;
