import styles from "./ButtonsContainer.module.css"

const ButtonsContainer = ({onButtonClicked}) =>{
    const buttonsNames = ['C', '1','2', '+', '3', '4','-', '5','6','*','7','8','/','=','9','0','.'];
    return (
        <div className={styles.buttonsContainer}>
            {
                buttonsNames.map((buttonName) => ( 
                   <button onClick={() => onButtonClicked(buttonName)} key={buttonName} className={styles.button}>{buttonName}</button>
                   )
                )
            }
      </div>
    )
}

export default ButtonsContainer;