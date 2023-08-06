// Defining an array containing mock data for member information
const mockMembersData = [
  {
    id: 1,
    name: "Arnaud Solefack",
    statusLevel: "Gold",
    memberSince: "2022-01-15",
  },
  {
    id: 2,
    name: "Jenny Le",
    statusLevel: "Silver",
    memberSince: "2023-02-28",
  },
];

// Defining an object containing mock API methods for interacting with member data
const mockMembersAPI = {
  // Method to fetch all members' data
  fetchMembers: async () => {
    return mockMembersData; // Returning the mock member data array
  },
  // Method to create a new member
  createMember: async (newMember) => {
    const memberId = mockMembersData.length + 1; // Generating a new member ID
    const memberWithId = { ...newMember, id: memberId }; // Creating a new member object with ID
    mockMembersData.push(memberWithId); // Adding the new member to the mock data array
    return memberWithId; // Returning the newly created member
  },
  // Method to update an existing member's data
  updateMember: async (memberId, updatedMember) => {
    const index = mockMembersData.findIndex((member) => member.id === memberId); // Finding the index of the member
    if (index !== -1) { // If member exists
      mockMembersData[index] = { ...mockMembersData[index], ...updatedMember }; // Updating member data
      return mockMembersData[index]; // Returning the updated member
    }
    return null; // If member is not found
  },
  // Method to delete a member
  deleteMember: async (memberId) => {
    const index = mockMembersData.findIndex((member) => member.id === memberId); // Finding the index of the member
    if (index !== -1) { // If member exists
      mockMembersData.splice(index, 1); // Removing the member from the mock data array
      return true; // Returning true to indicate successful deletion
    }
    return false; // If member is not found
  },
};

// Exporting the mockMembersAPI object as the default export of the module
export default mockMembersAPI;
