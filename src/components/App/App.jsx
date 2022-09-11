import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import styles from "./App.module.css";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import getIngredients from "../../utils/burger-api";

function App() {
  const [isIngredientModalOpen, setIsIngredientModalOpen] =
    React.useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = React.useState(false);
  const [ingredients, setIngredients] = React.useState([]);
  const [currentIngredient, setCurrentIngredient] = React.useState(null);

  React.useEffect(() => {
    getIngredients().then((data) => setIngredients(data.data));
  }, []);

  function handleOpenIngredientModal() {
    setIsIngredientModalOpen(true);
  }

  function handleOpenDetailsModal() {
    setIsDetailsModalOpen(true);
  }

  function handleCloseDetailsModal() {
    setIsDetailsModalOpen(false);
  }

  function handleCloseIngredientModal() {
    setIsIngredientModalOpen(false);
  }

  function getCurrentIngredient(item) {
    setCurrentIngredient(item);
    handleOpenIngredientModal();
  }

  function setOrder() {
    handleOpenDetailsModal();
  }

  return (
    <>
      <AppHeader />

      <main className={styles.container}>
        <h1 className="text text_type_main-large pt-10 pb-5">
          Соберите бургер
        </h1>
        <div className={styles["main-container"]}>
          <BurgerIngredients
            data={ingredients}
            getCurrentIngredient={getCurrentIngredient}
          />
          <BurgerConstructor data={ingredients} setOrder={setOrder} />
        </div>
      </main>

      <Modal isOpen={isIngredientModalOpen} close={handleCloseIngredientModal}>
        <IngredientDetails currentIngredient={currentIngredient} />
      </Modal>

      <Modal isOpen={isDetailsModalOpen} close={handleCloseDetailsModal}>
        <OrderDetails />
      </Modal>
    </>
  );
}

export default App;
