## Genesys Technical Homework

### Objective

Using any frontend framework or library, implement a solution for the task below. You have 7 days to complete the assignment. Please upload your code to GitHub and send the link back to us at Genesys.

### Task

1. **Create a Single Page App** that will have two pages: Home and Profile.
2. **Fetch Data from Rick & Morty API**: Utilize the [Rick & Morty API’s Character endpoint](https://rickandmortyapi.com/) to create a table on the Home page. The table should include the following columns: Avatar, Name, Species, Status. Generate data in the table based on the received response. Note: You don’t have to take care of pagination, it’s enough to use the first batch of data.
3. **Profile Page**: When the user clicks on one of the character names, navigate to the Profile page that will show detailed information about the selected character. The data should be retrieved from the API endpoint.
4. **Back Button**: The character profile page should have a Back button that will navigate back to the main table.

**Bonus tasks**:

- Use pagination in the main table (optional).
- Create an input field on the Home page to search among character names. It should have an `onChange` event, and you should only show rows that contain the searched string (optional).