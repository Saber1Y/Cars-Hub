const customButtonProps = {
    isDisabled: false,
    btnType: 'button',
    containerStyles: '',
    textStyles: '',
    title: '',
    rightIcon: '',
    handleClick: function (event) {
      console.log('Button clicked!', event);
    },
  };
  
  const searchManuFacturerProps = {
    manufacturer: '',
    setManuFacturer: function(manufacturer) {
      console.log('Selected manufacturer:', manufacturer);
      
    },
  };
  

  export { customButtonProps, searchManuFacturerProps}