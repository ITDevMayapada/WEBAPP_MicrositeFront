import React, { useEffect, useState } from "react";
import Modal from "../components/Elements/Modal/Modal";
import Pagination from "../components/Elements/Pagination/Pagination";
// import { getUsers } from "../assets/services/user.service";

const SettingUser = () => {
  const initialdata = [
    {
      menuId: 1,
      orderId: 11,
      parentMenuId: null,
      parentMenu: "",
      title: "Report",
      link: "",
      isLeaf: false,
      isActive: true,
      iconSVG:
        '<path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"/>',
      createBy: "zzITDevelopment",
      createDate: "01/01/2022",
      updateBy: "zzITDevelopment",
      updateDate: "01/01/2022",
    },
    {
      menuId: 1,
      orderId: 12,
      parentMenuId: "1",
      parentMenu: "Report",
      title: "Reksadana",
      link: "/report-reksadana",
      isLeaf: true,
      isActive: true,
      iconSVG: "",
      createBy: "zzITDevelopment",
      createDate: "01/01/2022",
      updateBy: "zzITDevelopment",
      updateDate: "01/01/2022",
    },
  ];

  // 1. initial variable
  const [menus, setMenu] = useState(initialdata);
  const [filteredMenu, setFilteredMenu] = useState(initialdata);
  const [filterText, setFilterText] = useState("");

  //   2. GET list users and role if API is already
  //   useEffect(() => {
  //     axios.get('https://api.example.com/data')
  //       .then(response => {
  //         setMenu(response.data);
  //         setFilteredMenu(response.data);
  //       })
  //       .catch(error => {
  //         console.error('Error fetching data:', error);
  //       });
  //   }, []);

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPageItems = menus.slice(indexOfFirstItem, indexOfLastItem);
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
      const newData = menus.filter((item) => item.userId !== id);
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
          Setting Menu
        </h2>

        <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
          List Menu of Microsite Admin
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
                  <th className="px-4 py-3">Parent Menu</th>
                  <th className="px-4 py-3">Menu</th>
                  <th className="px-4 py-3">Order ID</th>

                  <th className="px-4 py-3">link</th>
                  <th className="px-4 py-3">Is Leaf</th>
                  <th className="px-4 py-3">Is Active</th>
                  <th className="px-4 py-3">Icon SVG</th>

                  <th className="px-4 py-3">Create Date</th>
                  <th className="px-4 py-3">Create By</th>
                  <th className="px-4 py-3">Update Date</th>
                  <th className="px-4 py-3">Update By</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                {currentPageItems.map((menu) => (
                  <tr
                    className="text-gray-700 dark:text-gray-400"
                    key={menu.userId}
                  >
                    <td className="px-4 py-3 text-sm">{menu.parentMenu}</td>
                    <td className="px-4 py-3 text-sm">{menu.title}</td>
                    <td className="px-4 py-3 text-sm">{menu.orderId}</td>
                    <td className="px-4 py-3 text-sm">{menu.link}</td>
                    <td className="px-4 py-3 text-xs">
                      {menu.isLeaf ? (
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                          Yes
                        </span>
                      ) : (
                        <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700">
                          No
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-xs">
                      {menu.isActive ? (
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                          Active
                        </span>
                      ) : (
                        <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700">
                          Inactive
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm text-wrap">
                      {menu.iconSVG && (
                        <span className="items-center">
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            dangerouslySetInnerHTML={{ __html: menu.iconSVG }}
                          ></svg>
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm">{menu.createDate}</td>
                    <td className="px-4 py-3 text-sm">{menu.createBy}</td>
                    <td className="px-4 py-3 text-sm">{menu.updateDate}</td>
                    <td className="px-4 py-3 text-sm">{menu.updateBy}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-4 text-sm">
                        <button
                          className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                          aria-label="Edit"
                          onClick={() => handleEdit(menu)}
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
                          onClick={() => handleDelete(menu.userId)}
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
            totalItems={menus.length}
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
