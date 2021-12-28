
function Main() {
    return(
        <div className="main">
        <div className='center'>

          <div className='menu'>
            <div className='logo'>
              <h3>Logo Teste</h3>
            </div>
            <div className='item-menu'>
              <a href='#'>Login</a>
            </div>
          </div>


          <div className='form'>
          <h2>Entre em contato!</h2>
            <form>
              <div className='item-form'>
                <input type="text" placeholder='Nome'/>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Telefone'/>
                <input type="text" placeholder='Telefone fixo'/>
                <input type="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Main;