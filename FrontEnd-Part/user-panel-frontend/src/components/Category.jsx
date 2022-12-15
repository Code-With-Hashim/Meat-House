import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  MenuList,
  MenuItem,
  List,
  ListItem,
  Text,
  Center,
} from "@chakra-ui/react";
import { useEffect } from "react";
import styles from "../css.Module/ShopByCat.module.css";
const subcat = [
  [
    "Curry Cuts",
    "Boneless & Mince",
    "Speciality Cuts",
    "Combos",
    "Ready to Cook",
    "Meat Masalas",
  ],
  ["Freshwater", "Seawater", "Ready to Cook", " Crab", "Meat Masala"],
  [
    "Curry Cuts",
    "Boneless & Mince",
    "Speciality Cuts",
    "Offal",
    "Combos",
    "Ready to Cook",
    "Meat Masalas",
  ],
  [
    "Gourmet Marinades",
    "Kebabs & Tandoor",
    "Wings",
    "Crispy Snacks",
    "Burger Patties",
    "Biryani",
    "Combos",
  ],
  [
    "Small Size",
    "Medium Size",
    "Large Size",
    "Combos",
    "Ready to Cook",
    "Meat Masala",
  ],
  [
    "Curry Cuts",
    "Boneless & Mince",
    "Speciality Cuts",
    "Offal",
    "Combos",
    "Ready to Cook",
    "Meat Masalas",
  ],
  [
    "Curry Cuts",
    "Boneless & Mince",
    "Speciality Cuts",
    "Offal",
    "Combos",
    "Ready to Cook",
    "Meat Masalas",
  ],
  [
    "Gourmet Marinades",
    "Kebabs & Tandoor",
    "Wings",
    "Crispy Snacks",
    "Burger Patties",
    "Biryani",
    "Combos",
  ],
  [
    "Small Size",
    "Medium Size",
    "Large Size",
    "Combos",
    "Ready to Cook",
    "Meat Masala",
  ],
  [
    "Curry Cuts",
    "Boneless & Mince",
    "Speciality Cuts",
    "Offal",
    "Combos",
    "Ready to Cook",
    "Meat Masalas",
  ],
];
const Category = ({ cat }) => {
  const [ind, setInd] = useState(0);
  const [sub, setSub] = useState([]);

  useEffect(() => {
    setSub(subcat[ind]);
  }, [ind]);
  return (
    <MenuList width="400px">
      <Flex>
        <Box>
          <List>
            {cat.map((el, index) => (
              <ListItem>
                <MenuItem
                  className={styles.hvr}
                  minH="48px"
                  onMouseEnter={(e) => setInd(index)}
                >
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src={el.img}
                    alt="Fluffybuns the destroyer"
                    mr="12px"
                  />

                  <span>{el.title}</span>
                </MenuItem>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box backgroundColor="#F1F1F1" minW="200px">
          <List backgroundColor="#F1F1F1">
            {sub?.map((el) => (
              <ListItem backgroundColor="#F1F1F1">
                <MenuItem
                  backgroundColor="#F1F1F1"
                  m="auto"
                  className={styles.hvr}
                >
                  {el}
                </MenuItem>
              </ListItem>
            ))}
          </List>
        </Box>
      </Flex>
    </MenuList>
  );
};

export default Category;
