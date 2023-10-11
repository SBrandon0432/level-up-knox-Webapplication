import { ReactNode, createContext, useState } from "react";
import { StoreCards } from "./StaticDataStore";
import { EmployeeCard, StoreCardProps, StoreImages } from "./types";

interface MyLevelUpContextProperties {
    storeImages: StoreImages[];
    storeCards: StoreCardProps[];
    employeeCard: EmployeeCard[];
}

export const MyLevelUpContext = createContext<MyLevelUpContextProperties>({
    storeImages: [],
    storeCards: [],
    employeeCard: [],
});

interface Props {
    children: ReactNode;
}

export const MyLevelUpContextProvider = ({ children }: Props) => {
    const [storeImages] = useState<StoreImages[]>([]);
    const [storeCards] = useState<StoreCardProps[]>(StoreCards);
    const [employeeCard] = useState<EmployeeCard[]>([]);

    return (
        <MyLevelUpContext.Provider
            value={{
                storeCards,
                storeImages,
                employeeCard,
            }}
        >
            {children}
        </MyLevelUpContext.Provider>
    );
};
