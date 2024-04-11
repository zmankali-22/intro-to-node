


export const initialItems = [
    {
      id: 1,
      name: "good mood",
      packed: true,
    },
    {
      id: 2,
      name: "passport",
      packed: false,
    },
    {
      id: 3,
      name: "phone charger",
      packed: false,
    },

    export function useItemsContext() {
        const context = useContext(ItemsContext);
      
        if (!context) {
          throw new Error(
            "useItemsContext must be used within an ItemsContextProvider"
          );
        }
      
        return context;
      }