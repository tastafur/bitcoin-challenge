export const blockchainStockChossen = blockchainStock => blockchainStock[Math.floor(Math.random()*blockchainStock.length)];

const blockchainStockProfictCheck = blockchainStockProfictTemp => (blockchainStockProfictTemp !== 0 ? blockchainStockProfictTemp : -1);

export const blockchainStockProfict = (blockchainStock, blockchainStockChossen) => blockchainStockProfictCheck(blockchainStock.filter(element => element > blockchainStockChossen).reduce((a, b) =>
  (b - blockchainStockChossen > a ? b - blockchainStockChossen : a), 0));