import styled from "styled-components";

export const NavStyle=styled.header`
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2c3e50;
    padding: 1rem 2rem;
  }
  
  .navbar h1 {
    color: #ecf0f1;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
  }
  
  .nav-links li {
    margin-left: 1.5rem;
  }
  
  .nav-links a {
    color: #ecf0f1;
    text-decoration: none;
    font-weight: bold;
  }
  
  .nav-links a:hover {
    color: #3498db;
  }`