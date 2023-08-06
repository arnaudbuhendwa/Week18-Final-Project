import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Form } from 'react-bootstrap';
import mockMembersAPI from './rest/mockMembersData';

const Members = () => {
  const [members, setMembers] = useState([]); // Array to hold member data
  const [editingMemberId, setEditingMemberId] = useState(null); // ID of member being edited
  const [editingMemberName, setEditingMemberName] = useState(''); // Name of member being edited
  const [editingMemberStatus, setEditingMemberStatus] = useState(''); // Status of member being edited
  const [editingMemberSince, setEditingMemberSince] = useState(''); // Member since of member being edited
  const [newMemberName, setNewMemberName] = useState(''); // Name of new member being created
  const [newMemberStatus, setNewMemberStatus] = useState(''); // Status of new member being created
  const [newMemberSince, setNewMemberSince] = useState(''); // Member since of new member being created

  useEffect(() => {
    // Fetch members
    const fetchData = async () => {
      const membersData = await mockMembersAPI.fetchMembers();
      setMembers(membersData);
    };

    fetchData();
  }, []);

  const handleUpdateClick = (member) => {
    setEditingMemberId(member.id);
    setEditingMemberName(member.name);
    setEditingMemberStatus(member.statusLevel);
    setEditingMemberSince(member.memberSince);
  };

  const handleCancelUpdate = () => {
    setEditingMemberId(null);
    setEditingMemberName('');
    setEditingMemberStatus('');
    setEditingMemberSince('');
  };

  const handleUpdateMember = async (memberId) => {
    const updatedMember = {
      name: editingMemberName,
      statusLevel: editingMemberStatus,
      memberSince: editingMemberSince,
    };
    const updatedData = await mockMembersAPI.updateMember(memberId, updatedMember);
    const updatedMembers = members.map((member) =>
      member.id === memberId ? updatedData : member
    );
    setMembers(updatedMembers);
    handleCancelUpdate();
  };

  const handleDeleteMember = async (memberId) => {
    const deleteResult = await mockMembersAPI.deleteMember(memberId);
    if (deleteResult) {
      const updatedMembers = members.filter((member) => member.id !== memberId);
      setMembers(updatedMembers);
    }
  };

  const handleCreateMember = async () => {
    const newMember = {
      name: newMemberName,
      statusLevel: newMemberStatus,
      memberSince: newMemberSince,
    };
    const createdMember = await mockMembersAPI.createMember(newMember);
    setMembers([...members, createdMember]);
    setNewMemberName('');
    setNewMemberStatus('');
    setNewMemberSince('');
  };

  return (
    <Container className="mt-5">
      <h2>Members List</h2>
      <div className="row mt-3">
        {members.map((member) => (
          <div key={member.id} className="col-md-4 mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>Status Level: {member.statusLevel}</Card.Text>
                <Card.Text>Member Since: {member.memberSince}</Card.Text>
                {editingMemberId === member.id ? (
                  <div>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={editingMemberName}
                      onChange={(e) => setEditingMemberName(e.target.value)}
                    />
                    <Form.Label>Status</Form.Label>
                    <Form.Control
                      type="text"
                      value={editingMemberStatus}
                      onChange={(e) => setEditingMemberStatus(e.target.value)}
                    />
                    <Form.Label>Member Since</Form.Label>
                    <Form.Control
                      type="date"
                      value={editingMemberSince}
                      onChange={(e) => setEditingMemberSince(e.target.value)}
                    />
                    <Button variant="success" onClick={() => handleUpdateMember(member.id)}>
                      Save
                    </Button>
                    <Button variant="secondary" onClick={handleCancelUpdate}>
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <div>
                    <Button variant="primary" onClick={() => handleUpdateClick(member)}>
                      Update
                    </Button>{' '}
                    <Button variant="danger" onClick={() => handleDeleteMember(member.id)}>
                      Delete
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <div className="mt-3">
        <h3>Create New Member</h3>
        <Form>
          <Form.Group controlId="newMemberName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={newMemberName}
              onChange={(e) => setNewMemberName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="newMemberStatus">
            <Form.Label>Status</Form.Label>
            <Form.Control
              type="text"
              value={newMemberStatus}
              onChange={(e) => setNewMemberStatus(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="newMemberSince">
            <Form.Label>Member Since</Form.Label>
            <Form.Control
              type="date"
              value={newMemberSince}
              onChange={(e) => setNewMemberSince(e.target.value)}
            />
          </Form.Group>
          <Button variant="success" onClick={handleCreateMember}>
            Create New Member
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Members;
