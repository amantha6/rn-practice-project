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

![image](https://github.com/user-attachments/assets/0799ed8a-8362-4ede-a5f7-ed8a1743abfd)

## Video 5 - Text Input Components

### Key Concepts Covered
- Using the `TextInput` component to collect user input
  - Syntax: `<TextInput />` (self-closing tag)
  - Capturing text values through `onChangeText` event handler
  
- TextInput Properties:
  - `placeholder="e.g. JohnDoe"` - Displays hint text when field is empty
  - `style` - Customize appearance (borders, padding, etc.)
  - `multiline` - Allows multiple lines of text
  - `keyboardType="numeric"` - Displays number keyboard for numeric input
  
- State Management with TextInput:
  - Using `onChangeText={(val) => setName(val)}` to update state
  - Capturing values as the user types
  - Displaying input values in the UI using state variables
  
- Implementation:
  ```javascript
  const [name, setName] = useState('');
  
  // In your JSX
  <TextInput 
    style={styles.input}
    placeholder='e.g. JohnDoe'
    onChangeText={(val) => setName(val)}
  />
![image](https://github.com/user-attachments/assets/6d576a7e-2b4e-4f7d-beec-af8a4cb6c582)

## Video 6 - Lists in React Native

### Key Concepts Covered
- Working with lists of data in React Native
- Using state to manage array data
  - Syntax: `const [people, setPeople] = useState([{name: '...', key: '1'}, ...])`
  - Setting up arrays with key-value pairs
  
- Using the map() function to render lists
  - Syntax: `{people.map(() => {})}`
  - Iterating through array items to render components
  
- Returning JSX templates for each item
  ```javascript
  {people.map((item) => (
    <View key={item.key}>
      <Text>{item.name}</Text>
    </View>
  ))}
![image](https://github.com/user-attachments/assets/38bff978-73f0-4299-9092-117e522c08f3)

## Video 7 - FlatList Component

### Key Concepts Covered
- Using FlatList for efficient list rendering
  - Import: `import { FlatList } from 'react-native'`
  - Self-closing component: `<FlatList />`
  
- Essential FlatList Properties:
  - `data` - Array of items to render
  - `renderItem` - Function to render each item: `renderItem={({item}) => ()}`
  
- Key Management Options:
  - FlatList automatically looks for a `key` property in data
  - For data without a "key" property, use `keyExtractor`:
    ```javascript
    keyExtractor={(item) => item.id}
    ```
  
- Advantages over ScrollView:
  - Better performance for large lists
  - Only renders items currently visible on screen
  - Automatic memory management
  
- Additional Useful Properties:
  - `numColumns={2}` - Display data in multiple columns
  - `horizontal={true}` - Horizontal scrolling list
  - `marginHorizontal={10}` - Add horizontal margin
  - `marginTop={24}` - Add top margin
  
- Best Practices:
  - Use FlatList for longer lists or when items come from a database
  - Use keyExtractor when your data doesn't include a "key" property
  - Remember that item in renderItem gives you access to the current item being rendered
