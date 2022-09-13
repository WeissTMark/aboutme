import {
    Grid,
    Paper,
    Typography,
    Link,
} from "@mui/material";

export default function Footer() {

    return (
        <>
            <Paper sx={{
                m: 1, display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                verticalAlign: "middle",
                bgcolor: '#26a69a',
                boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "25px",
            }}>
                <Grid container sx={{mt: 2, mb: 2}}>
                    <Grid item xs={12}>
                        <Typography variant='h5'>This site was made using React and Material-UI And hosted using AWS Amplify</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h6'>Author: Mark Weiss</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h5'>Feel free to watch my progress{" "}
                        <Link variant='h5' href="https://github.com/WeissTMark/aboutme">here</Link>
                        </Typography>
                    </Grid> 

                </Grid>
            </Paper>
        </>
    )
}