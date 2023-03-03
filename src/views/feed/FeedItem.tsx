import Box from "@mui/material/Box";
import { Typography, Divider } from "@mui/material";
import Pill from "../common/Pill";
import { PrimaryButton } from "../common/PrimaryButton";
import Bolt from "@mui/icons-material/Bolt";
import { useRouter } from "next/router";
import { ls } from "src/services/localStorage";

const colorConstant = {
  "Social media & Ads": "#FFE6A9",
  "Blog content": "#F2D4FF",
  Ideas: "#FFD2D1",
};
export default function FeedItem(props: any) {
  const router = useRouter();
  const handleClick = () => {
    ls.set("article", JSON.stringify(props.article));
    router.push("/article");
  };
  return (
    <>
      <Box marginTop="32px">
        <Box display="flex" alignItems="center">
          <img src="/static/icon/phone.svg" />
          <Box mx="16px">
            <Pill color={colorConstant[props.type]} onClick={() => console.log("")}>
              {props.type}
            </Pill>
          </Box>
          <Typography>3 March</Typography>
        </Box>
        <Box display="flex" paddingRight="64px" justifyContent="space-between" alignItems="center">
          <Box marginTop="16px">
            <Typography
              fontWeight="700"
              variant="h3"
              onClick={() => handleClick()}
              sx={{ cursor: "pointer" }}
            >
              {props.header}
            </Typography>
            <Box
              sx={{ height: "100px", overflow: "hidden", textOverflow: "ellipsis" }}
              marginTop="16px"
            >
              {props.content}
            </Box>
          </Box>
          <Box sx={{ marginLeft: "16px" }}>
            <img width="140px" height="140px" src={props.image} />
          </Box>
        </Box>
        <PrimaryButton sx={{ marginTop: "16px", borderRadius: "24px" }} startIcon={<Bolt />}>
          More from this topic
        </PrimaryButton>
      </Box>
      <Divider sx={{ marginTop: "32px", bgcolor: "rgba(0, 0, 0, 0.2)" }} />
    </>
  );
}
