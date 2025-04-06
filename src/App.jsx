 
import './App.css'
import {  gql } from "@apollo/client"; 
import DisplayLocations from './DisplayLocations';
export const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;
function App() { 

  return (
    <>
      <DisplayLocations/>
    </>
  )
}

export default App
