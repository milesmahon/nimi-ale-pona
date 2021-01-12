import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import NavigationMenu from './NavigationMenu'

// import '../styles/App.scss';

function Menu() {
    const [showMenu, setShowMenu] = useState(false);
    const transitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })
    return (
        // <span className = "menu" onClick = {() => setShowMenu(!showMenu)}>  
        <span className = "menu" onClick = {() => setShowMenu(!showMenu)}>  
            <FontAwesomeIcon 
                icon={faBars}
            />
            {/* TODO mask doesn't work */}
            {/* {
                transitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        className="menuMask"
                        key={key} 
                        style={props}
                        onClick={() => setShowMenu(!showMenu)}
                    >
                    </animated.div>
                )
            } */}
            {
                transitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        className="menu"
                        key={key} 
                        style={props}
                    >
                        <NavigationMenu closeMenu={() => setShowMenu(false)} />
                    </animated.div>
                )
            }
        </span>
    )
}

export default Menu;