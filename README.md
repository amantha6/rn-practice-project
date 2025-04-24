# rn-practice-project
Contains practice projects, code experiments, and implementation of key concepts including component architecture, navigation patterns, state management, and cross-platform development.

![image](https://github.com/user-attachments/assets/e1a468c5-eab3-4445-925d-f6a7b1ebc407)

![image](https://github.com/user-attachments/assets/0e802dac-7c9b-4ce8-a3d8-fb8521557ae8)

Expo CLI vs React Native CLI

The React Native CLI is more bare-bones and doesn't provide those pre-defined features by default. This gives you more control but requires more manual configuration.

**Project Structure Notes**


.expo and .expo_shared contain configuration and settings
assets holds images and other static resources
node_modules contains dependencies and packages
.gitignore specifies which files to exclude from version control
App.js is the main entry point of your application
app.json contains project details and configuration
babel.config.js handles JavaScript compilation settings

![image](https://github.com/user-attachments/assets/db887c82-6ec5-433a-bbd3-6d8f7c1b4986)
## Video 3 - Styles and Component Basics

### Key Concepts Covered
- Styling in CSS vs React Native
  - React Native simulates CSS properties
  - Uses different prop names and style differences compared to web CSS
  
- Stylesheet API:
  ```javascript
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  })



Creating styles using StyleSheet.create() provides an object for styling
Styles are passed to components using the style prop
React Native creates separate style objects with different key-value pairs than traditional CSS
Components within a parent component inherit styles from their parent

![image](https://github.com/user-attachments/assets/3d94000d-6157-47b4-82f7-b01dbbfa0e0d)

## Video 4 - Using State to Output Dynamic Content

### Key Concepts Covered
- Using `useState` hook to manage dynamic content
  - Syntax: `const [name, setName] = useState('Aditi')`
  - Updates state using setter function
  
- Working with state for:
  - Simple values (strings)
  - Complex objects (objects with multiple properties)
  
- Click handlers for updating state:
  ```javascript
  const clickHandler = () => {
    setName('Adhira');
   
  }



Implementation

Created dynamic text displays that update when button is clicked
Managed both simple state (name) and object state (person)
Added styling for button container with margin
