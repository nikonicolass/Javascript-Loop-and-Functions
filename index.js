const NFTs = []

function mintNFT (_Name,_Carcolor,_Rimcolor,_Vehicletype) { 
  
  const NFT = {
      "Name":_Name,
      "Carcolor":_Carcolor,
      "Rimcolor":_Rimcolor,
      "Vehicletype":_Vehicletype
  }
NFTs.push(NFT)
console.log("Minted: "+_Name)
console.log("-------")
}

// 
function listNFTs () {
  for(var list = 0; list<NFTs.length;list++){
    console.log("NFT ID Number: \t"+  (list+1));
    console.log("Name: \t"+NFTs[list].Name);
    console.log("Car Color: \t"+NFTs[list].Carcolor);
    console.log("Rim Color: \t"+NFTs[list].Rimcolor);
    console.log("Vehicle Type: \t"+NFTs[list].Vehicletype);
    console.log("-------");
  }
}
  function getTotalSupply(){
    console.log(NFTs.length);
    console.log("-------")
  }


  mintNFT("Niko","Black","Bronze","Sports");
  mintNFT("Ian","White","Silver","SUV");
  mintNFT("Geth","Silver","Bronze","Hatchback");
  mintNFT("Mary","Red","Bronze","Sedan");


listNFTs();
getTotalSupply();