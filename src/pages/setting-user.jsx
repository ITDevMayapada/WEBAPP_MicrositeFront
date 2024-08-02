import React, { useEffect, useState } from "react";
import Modal from "../components/Elements/Modal/Modal";
import Pagination from "../components/Elements/Pagination/Pagination";
// import { getUsers } from "../assets/services/user.service";

const SettingUser = () => {
  const initialdata = [
    {
      userId: 1,
      userWindows: "zzSandrya",
      userName: "Vincent Sandrya",
      roleId: 2,
      role: "marcom",
      isActive: true,
      createdDate: "01/01/2022",
      createdBy: "zzITDevelopment",
      modifiedDate: "01/01/2022",
      modifiedBy: "zzITDevelopment",
    },
    {
      userId: 2,
      userWindows: "zzITDevelopment",
      userName: "IT Development",
      roleId: 1,
      role: "admin",
      isActive: false,
      createdDate: "01/01/2022",
      createdBy: "zzITDevelopment",
      modifiedDate: "01/01/2022",
      modifiedBy: "zzITDevelopment",
    },
    {
      userId: 3,
      userWindows: "zzITDevelopment",
      userName: "IT Development",
      roleId: 1,
      role: "admin",
      isActive: false,
      createdDate: "01/01/2022",
      createdBy: "zzITDevelopment",
      modifiedDate: "01/01/2022",
      modifiedBy: "zzITDevelopment",
    },
    {
      userId: 4,
      userWindows: "zzITDevelopment",
      userName: "IT Development",
      roleId: 1,
      role: "admin",
      isActive: false,
      createdDate: "01/01/2022",
      createdBy: "zzITDevelopment",
      modifiedDate: "01/01/2022",
      modifiedBy: "zzITDevelopment",
    },
    {
      userId: 5,
      userWindows: "zzITDevelopment",
      userName: "IT Development",
      roleId: 1,
      role: "admin",
      isActive: false,
      createdDate: "01/01/2022",
      createdBy: "zzITDevelopment",
      modifiedDate: "01/01/2022",
      modifiedBy: "zzITDevelopment",
    },
    {
      userId: 6,
      userWindows: "zzITDevelopment",
      userName: "IT Development",
      roleId: 1,
      role: "admin",
      isActive: false,
      createdDate: "01/01/2022",
      createdBy: "zzITDevelopment",
      modifiedDate: "01/01/2022",
      modifiedBy: "zzITDevelopment",
    },
    {
      userId: 7,
      userWindows: "zzITDevelopment",
      userName: "IT Development",
      roleId: 1,
      role: "admin",
      isActive: false,
      createdDate: "01/01/2022",
      createdBy: "zzITDevelopment",
      modifiedDate: "01/01/2022",
      modifiedBy: "zzITDevelopment",
    },
    {
      userId: 8,
      userWindows: "zzITDevelopment",
      userName: "IT Development",
      roleId: 1,
      role: "admin",
      isActive: false,
      createdDate: "01/01/2022",
      createdBy: "zzITDevelopment",
      modifiedDate: "01/01/2022",
      modifiedBy: "zzITDevelopment",
    },
    {
      userId: 9,
      userWindows: "zzITDevelopment",
      userName: "IT Development",
      roleId: 1,
      role: "admin",
      isActive: false,
      createdDate: "01/01/2022",
      createdBy: "zzITDevelopment",
      modifiedDate: "01/01/2022",
      modifiedBy: "zzITDevelopment",
    },
    {
      userId: 10,
      userWindows: "zzITDevelopment",
      userName: "User 10",
      roleId: 1,
      role: "admin",
      isActive: false,
      createdDate: "01/01/2022",
      createdBy: "zzITDevelopment",
      modifiedDate: "01/01/2022",
      modifiedBy: "zzITDevelopment",
    },
    {
      userId: 11,
      userWindows: "zzITDevelopment",
      userName: "User 11",
      roleId: 1,
      role: "admin",
      isActive: false,
      createdDate: "01/01/2022",
      createdBy: "zzITDevelopment",
      modifiedDate: "01/01/2022",
      modifiedBy: "zzITDevelopment",
    },
  ];

  const [roles, setRole] = useState([
    {
      roleId: 1,
      roleName: "admin",
    },
    {
      roleId: 2,
      roleName: "marcom",
    },
    {
      roleId: 3,
      roleName: "credit",
    },
  ]);

  // 1. initial variable
  const [users, setUser] = useState(initialdata);
  const [filteredUser, setFilteredUser] = useState(initialdata);
  const [filterText, setFilterText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  //   2. GET list users and role if API is already
  //   useEffect(() => {
  //     axios.get('https://api.example.com/data')
  //       .then(response => {
  //         setData(response.data);
  //         setFilteredData(response.data);
  //       })
  //       .catch(error => {
  //         console.error('Error fetching data:', error);
  //       });
  //   }, []);

  // 2. Handle filter logic
  useEffect(() => {
    const filtered = users.filter(
      (item) =>
        item.userName.toLowerCase().includes(filterText.toLowerCase()) ||
        item.userWindows.toLowerCase().includes(filterText.toLowerCase()) ||
        item.email.toLowerCase().includes(filterText.toLowerCase()) ||
        item.branch.toLowerCase().includes(filterText.toLowerCase())
    );
    setFilteredUser(filtered);
    setCurrentPage(1); // Reset to first page on filter change
  }, [filterText, users]);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPageItems = users.slice(indexOfFirstItem, indexOfLastItem);
  // END PAGINATION

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // ADD
  const [isAddMode, setIsAddMode] = useState(false);

  const handleAdd = () => {
    setIsAddMode(true);
  };

  const handleModalAddClose = () => {
    setIsAddMode(false);
  };

  const handleConfirmAdd = () => {
    // const newData = data.map((item) =>
    //   item.id === currentItem.id ? currentItem : item
    // );
    // setData(newData);
    handleModalClose();
  };
  // END EDIT

  // EDIT
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const handleEdit = (item) => {
    setCurrentItem(item);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsEditMode(false);
    setCurrentItem(null);
  };

  const handleConfirmEdit = () => {
    const newData = data.map((item) =>
      item.id === currentItem.id ? currentItem : item
    );
    setData(newData);
    handleModalClose();
  };

  // END EDIT

  // DELETE
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const newData = users.filter((item) => item.userId !== id);
      setUser(newData);
    }
  };
  // END DELETE

  // useEffect(() => {
  //   getUsers();
  // }, [users]);

  return (
    <main className="h-full pb-16 overflow-y-auto">
      <div className="container grid px-6 mx-auto">
        <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Setting User
        </h2>

        <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
          List User of Microsite Admin
        </h4>

        <div className="flex flex-wrap mb-2">
          <div className="mr-2">
            <input
              type="text"
              placeholder="Search..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="block mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
            />
          </div>
          <div>
            <button
              className="px-4 py-2 mb-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
              aria-label="Add"
              onClick={() => handleAdd()}
            >
              Add
            </button>
          </div>
        </div>
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="w-full overflow-x-auto">
            <table className="w-full whitespace-no-wrap">
              <thead>
                <tr className="text-center text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                  <th className="px-4 py-3">User</th>
                  <th className="px-4 py-3">role</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Created Date</th>
                  <th className="px-4 py-3">Created By</th>
                  <th className="px-4 py-3">Modified Date</th>
                  <th className="px-4 py-3">Modified By</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                {currentPageItems.map((user) => (
                  <tr
                    className="text-gray-700 dark:text-gray-400"
                    key={user.userId}
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center text-sm">
                        <div>
                          <p className="font-semibold">{user.userName}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {user.userWindows}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">{user.role}</td>
                    <td className="px-4 py-3 text-xs">
                      {user.isActive ? (
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                          Active
                        </span>
                      ) : (
                        <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700">
                          Inactive
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm">{user.createdDate}</td>
                    <td className="px-4 py-3 text-sm">{user.createdBy}</td>
                    <td className="px-4 py-3 text-sm">{user.modifiedDate}</td>
                    <td className="px-4 py-3 text-sm">{user.modifiedBy}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-4 text-sm">
                        <button
                          className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                          aria-label="Edit"
                          onClick={() => handleEdit(user)}
                        >
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                          </svg>
                        </button>
                        <button
                          className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                          aria-label="Delete"
                          onClick={() => handleDelete(user.userId)}
                        >
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={users.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
        <Modal
          title="Edit User"
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onConfirm={handleConfirmEdit}
        >
          {isEditMode && currentItem && (
            <div>
              <label className="block mt-4 text-sm">
                <span className="text-gray-700 dark:text-gray-400">
                  User Window
                </span>
                <input
                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  value={currentItem.userWindows}
                  disabled
                />
              </label>

              <label className="block mt-4 text-sm">
                <span className="text-gray-700 dark:text-gray-400">Name</span>
                <input
                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  placeholder="Jane Doe"
                  value={currentItem.userName}
                />
              </label>

              <label className="block mt-4 text-sm">
                <span className="text-gray-700 dark:text-gray-400">Role</span>
                <select
                  className="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                  value={currentItem?.roleId}
                >
                  {roles.map((role) => (
                    <option value={role.roleId}>{role.roleName}</option>
                  ))}
                </select>
              </label>

              <label className="block mt-4 text-sm">
                <input
                  type="checkbox"
                  className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                  name="accountType"
                  checked={currentItem.isActive}
                />
                <span className="ml-2 text-gray-700 dark:text-gray-400">
                  Active
                </span>
              </label>

              <label className="block mt-4 text-sm">
                <span className="text-gray-700 dark:text-gray-400">
                  Created Date
                </span>
                <input
                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  value={currentItem.createdDate}
                  disabled
                />
              </label>

              <label className="block mt-4 text-sm">
                <span className="text-gray-700 dark:text-gray-400">
                  Created By
                </span>
                <input
                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  value={currentItem.createdBy}
                  disabled
                />
              </label>

              <label className="block mt-4 text-sm">
                <span className="text-gray-700 dark:text-gray-400">
                  Modified Date
                </span>
                <input
                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  value={currentItem.modifiedDate}
                  disabled
                />
              </label>

              <label className="block mt-4 text-sm">
                <span className="text-gray-700 dark:text-gray-400">
                  Modified By
                </span>
                <input
                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  value={currentItem.modifiedBy}
                  disabled
                />
              </label>
            </div>
          )}
        </Modal>

        <Modal
          title="Add User"
          isOpen={isAddMode}
          onClose={handleModalClose}
          onConfirm={handleConfirmAdd}
        >
          {isAddMode && (
            <div>
              <label className="block mt-4 text-sm">
                <span className="text-gray-700 dark:text-gray-400">
                  User Window
                </span>
                <input
                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  placeholder="zzJohnDoe"
                />
              </label>

              <label className="block mt-4 text-sm">
                <span className="text-gray-700 dark:text-gray-400">Name</span>
                <input
                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  placeholder="John Doe"
                />
              </label>

              <label className="block mt-4 text-sm">
                <span className="text-gray-700 dark:text-gray-400">Role</span>
                <select className="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
                  {roles.map((role) => (
                    <option value={role.roleId}>{role.roleName}</option>
                  ))}
                </select>
              </label>

              <label className="block mt-4 text-sm">
                <input
                  type="checkbox"
                  className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                  name="accountType"
                />
                <span className="ml-2 text-gray-700 dark:text-gray-400">
                  Active
                </span>
              </label>
            </div>
          )}
        </Modal>
      </div>
    </main>
  );
};

export default SettingUser;
