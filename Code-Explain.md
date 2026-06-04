# App.jsx

## Purpose
This file is the brain/assembly room of website. It decides:

Which page to show
Which components appear on every page
How routing works
How the sidebar opens/closes
How the footer works
What happens when user changes pages

Everything gets assembled here.
## Imports
- Its first importing libraries - gsap 
                                scrolltrigger(needed for gsap animations without it , aniamtions won't work)
                                Routes (Page navigation)
                                useEffect hooks (Runs code automatically when something changes)
                                useState hooks (for storing changing values)
                                import { AnimatePresence } from 'framer-motion'; (Smooth enter/exit animations, used for sidebar)


## State Variables
- useEffect(() => {
    window.scrollTo({  //Always open new page from top.


## Main Components Used
- const { pathname } = useLocation(); 
This gets the current path (like /or /contact) from React Router.

- useEffect(() => { ... }, [pathname]); 
This tells React to run the code inside the block every time the URL path (pathname) changes.

- window.scrollTo({ top: 0, behavior: "instant" }); 
This immediately jumps the browser window back to the top (y = 0) instantly, so the user starts reading the new page from the beginning.

- const timer = setTimeout(() => { ScrollTrigger.refresh(); }, 100);
ScrollTrigger needs to calculate exactly where elements are on the page to trigger animations as you scroll past them.
When a new page loads, elements take a few milliseconds to render. This timer waits 100 milliseconds and then calls ScrollTrigger.refresh() to recalculate all of those position coordinates.

- return () => clearTimeout(timer); 
This cleans up the timer if the user quickly navigates to another page before the 100ms is up, preventing errors.

- return null; 
Because this component only performs background operations, it doesn't render any visible HTML.