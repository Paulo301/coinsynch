import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { createColumnHelper } from "@tanstack/react-table";
import Image from "next/image";
import { useMemo } from "react";
import { Button } from "@/components/Button";
import { quartenary, secondary, tertiary } from "@/styles/colors";
import { TopCryptosTable } from "./TopCryptosTable";

const defaultData: Crypto[] = [
  {
    id: "1",
    name: "Bitcoin",
    acronym: "BTC",
    price: "US$ 25.499,52",
    change: "+5,65%",
    rank: 1,
    icon: "",
  },
  {
    id: "2",
    name: "Ethereum",
    acronym: "ETH",
    price: "US$ 15.499,52",
    change: "-5,65%",
    rank: 2,
    icon: "",
  },
  {
    id: "3",
    name: "Cardano",
    acronym: "ADA",
    price: "US$ 5.499,52",
    change: "-5,65%",
    rank: 3,
    icon: "",
  },
  {
    id: "4",
    name: "Solana",
    acronym: "SOL",
    price: "US$ 2.499,52",
    change: "+5,65%",
    rank: 4,
    icon: "",
  },
];

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "76rem",
  margin: "0 auto",
  paddingBlock: "7.5rem"
});

const CryptoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

export type Crypto = {
  id: string;
  name: string;
  acronym: string;
  price: string;
  change: string;
  rank: number;
  icon: string;
};

interface TopCryptosProps {}

export function TopCryptos({}: TopCryptosProps) {
  const columnHelper = createColumnHelper<Crypto>();

  const columns = useMemo(
    () => [
      columnHelper.accessor("rank", {
        header: "#",
        cell: (info) => (
          <Typography variant="label">{info.getValue()}</Typography>
        ),
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor("name", {
        header: "Crypto",
        cell: (info) => (
          <CryptoContainer>
            <Image
              src="/images/cryptoCurrencyB.svg"
              alt={`${info.getValue()} Icon`}
              width={32}
              height={32}
            />
            <Typography variant="body1">
              {info.getValue()}{" "}
              <Typography component="span" sx={{ color: secondary[500] }}>
                {info.row.original.acronym}
              </Typography>
            </Typography>
          </CryptoContainer>
        ),
        footer: (props) => props.column.id,
      }),
      columnHelper.accessor("price", {
        header: "Price",
        cell: (info) => (
          <Typography variant="body1">{info.getValue()}</Typography>
        ),
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor("change", {
        header: "Change",
        cell: (info) => (
          <Typography
            variant="body1"
            sx={{
              color:
                info.getValue()[0] === "+" ? tertiary[700] : quartenary[700],
            }}
          >
            {info.getValue()}
          </Typography>
        ),
        footer: (info) => info.column.id,
      }),
      columnHelper.display({
        id: "trade",
        header: "Trade",
        cell: (props) => (
          <Button
            fullWidth
            size="small"
            sx={{
              backgroundColor: tertiary[700],
              ":hover": {
                backgroundColor: tertiary[800],
              },
            }}
          >
            Buy
          </Button>
        ),
      }),
    ],
    []
  );

  return (
    <Container id="top-cryptos">
      <Typography variant="h3">Top Cryptos</Typography>
      <TopCryptosTable data={defaultData} columns={columns} />
    </Container>
  );
}