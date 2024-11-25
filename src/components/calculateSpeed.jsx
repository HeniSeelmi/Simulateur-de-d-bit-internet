// Fonction pour calculer la nouvelle valeur de débit sans limitation
export const calculateNewSpeed = (accumulatedSpeed, value) => {
    return accumulatedSpeed + value * 5;
  };
  
  
export const calculateSpeed = (localEmployeeCount, qualityValue) => {
  return localEmployeeCount * 10 + qualityValue;
};
