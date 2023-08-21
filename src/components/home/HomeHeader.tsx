import "../../assets/styles/home/HomeHdStyle.css";
import { Link } from "react-router-dom";
import { Button, Container, Modal, Stack } from "react-bootstrap";
import { FC, useEffect, useState } from "react";
import useUserList from "../hooks/useListUsers";

interface ExampleUserComponentProps {
  exampleData: ExampleApiResponse;
  multiple?: boolean;
}

const ExampleUserComponent: FC<ExampleUserComponentProps> = ({
  exampleData,
  multiple = false,
}) => {
  const { userId, body } = exampleData;

  return (
    <div>
      <h3>{multiple ? "Multiple" : "Single"} user</h3>
      <p>
        <strong>ID:</strong> {exampleData.id}
      </p>
      <p>
        <strong>Title:</strong> {exampleData.title}
      </p>
      <p>
        <strong>UserID:</strong> {userId}
      </p>
      <p>
        <strong>Body:</strong> {body}
      </p>
    </div>
  );
};

const HomeHeader = () => {
  const [showModal, setShowModal] = useState(false);
  // const [singleModalData, setSingleModalData] =
  //   useState<ExampleApiResponse | null>(null);
  // const [listModalData, setListModalData] = useState<ExampleApiResponse[]>([]);

  // I'm destructuring the data from the custom hook
  // and renaming it to mockUsers
  // The data could be named as you want or use it directly as data
  // const { data: mockUsersList, isSuccess: userListSuccess } =
  //   useMockUsersList();
  // const { data, isSuccess } = useGetMockUsers(1); // data is not fetched if you don't pass the userId

  //const { data: userList, isSuccess: userRolesSuccess } = useUserList()

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  // useEffect(() => {
  //   if (userListSuccess && mockUsersList) {
  //     setListModalData(mockUsersList);
  //   }
  // }, [mockUsersList, userListSuccess, setListModalData]);

  // useEffect(() => {
  //   if (isSuccess && data) {
  //     setSingleModalData(data);
  //   }
  // }, [data, isSuccess, setSingleModalData]);

  return (
    <div id="header">
      <div className="intro">
        <Container className="intro-text">
          <h1>Home of code</h1>
          <p>Diseño Web • Aplicaciones • Soluciones TI • Product Design</p>
          <Link to="/indexmax" className="btn btn-custom btn-lg page-scroll">
            Saber mas
          </Link>
          <Stack gap={3}>
            <p>Api example with axios</p>
            <Button
              onClick={handleModalOpen}
              variant="outline-light"
              className="btn-lg page-scroll"
            >
              Get One
            </Button>
          </Stack>
          <Modal show={showModal} onHide={handleModalClose}>
            <Modal.Header closeButton>
              <Modal.Title>Example of mock users</Modal.Title>{" "}
            </Modal.Header>
            <Modal.Body>
              <p>
                This data was retrieved from{" "}
                <a
                  href="https://jsonplaceholder.typicode.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  jsonplaceholder.typicode
                </a>{" "}
                using{" "}
                <a
                  href="https://tanstack.com/query/latest"
                  target="_blank"
                  rel="noreferrer"
                >
                  react-query
                </a>
              {/*userRolesSuccess && userList?.map(user => (user.UserName))*/}
              </p> 
              {/* {singleModalData && (
                <ExampleUserComponent exampleData={singleModalData} />
              )}
              {listModalData
                ?.slice(0, 5)
                .map((userData: ExampleApiResponse) => (
                  <ExampleUserComponent
                    key={userData.id}
                    exampleData={userData}
                    multiple
                  />
                ))} */}
            </Modal.Body>
          </Modal>
        </Container>
      </div>
    </div>
  );
};

export default HomeHeader;
