# Navbar Fix TODO

- [x] Edit src/components/Navbar.tsx: Remove fixed positioning, change to relative, remove z-50, adjust mobile menu top from top-24 to top-0
- [x] Edit src/pages/Index.tsx: Remove pt-24 from the main div
- [x] Update scrollToSection in Navbar.tsx: Remove the offset calculation (96px)
- [x] Update the useEffect for location.hash in Navbar.tsx: Remove the offset

# Scroll to Top Button TODO

- [x] Create src/components/ScrollToTop.tsx component
- [x] Add ScrollToTop to App.tsx for global availability
