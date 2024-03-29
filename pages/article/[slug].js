import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Head from "next/head";

import {
  Container,
  Grid,
  Typography,
  Button,
  Tooltip,
} from "@material-ui/core";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  frontmatterGrid: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
}));

//Generate Static Paths

export async function getStaticPaths() {
  //filter only .md file
  const dirents = fs.readdirSync(path.join("articles"), {
    withFileTypes: true,
  });
  const files = dirents
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name);

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

//Get article frontmatter, slug and contents.

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("articles", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}

export default function PostPage({
  frontmatter: { title, type, date, excerpt },
  slug,
  content,
}) {
  const classes = useStyles();

  //!Commenting system is not done

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={excerpt} />
      </Head>

      <Container maxWidth="md" className={classes.root}>
        <Button color="secondary" startIcon={<ArrowBackRoundedIcon />} href="/">
          GO BACK
        </Button>
        <Tooltip title="Under Development" placement="top">
          <Button color="secondary">Talk About It</Button>
        </Tooltip>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          className={classes.frontmatterGrid}
        >
          <Typography variant="h3" gutterBottom>
            {title}
          </Typography>
          <Typography variant="caption">{"#" + type}</Typography>
          <Typography variant="caption">{"Posted On  " + date}</Typography>
        </Grid>
        <div className="markdown-body">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </Container>
    </>
  );
}
