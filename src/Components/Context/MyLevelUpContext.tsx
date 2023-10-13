import { ReactNode, createContext, useState } from "react";
import { StoreCards, StoreImages } from "./StaticDataStore";
import { EmployeeCardProps, StoreCardProps, StoreImagesProps } from "./types";

interface MyLevelUpContextProperties {
    storeImages: StoreImagesProps[];
    storeCards: StoreCardProps[];
    employeeCards: EmployeeCardProps[];
}

export const MyLevelUpContext = createContext<MyLevelUpContextProperties>({
    storeImages: [],
    storeCards: [],
    employeeCards: [],
});

interface Props {
    children: ReactNode;
}

export const MyLevelUpContextProvider = ({ children }: Props) => {
    const [storeImages] = useState<StoreImagesProps[]>(StoreImages);
    const [storeCards] = useState<StoreCardProps[]>(StoreCards);
    const [employeeCards] = useState<EmployeeCardProps[]>([]);

    return (
        <MyLevelUpContext.Provider
            value={{
                storeCards,
                storeImages,
                employeeCards,
            }}
        >
            {children}
        </MyLevelUpContext.Provider>
    );
};
