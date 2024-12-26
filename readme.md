# Setup

1) Install [`@jrc03c/make-key`](https://github.com/jrc03c/monorepo/tree/main/packages/make-key).

```bash
npm install -g @jrc03c/make-key
```

2) Define the following function in your `~/.bashrc` file:

```bash
function scaffold () {
  template=$1;
  newdir=$1;

  if [[ $2 ]]; then
    newdir=$2;
  fi

  if [[ -d $newdir ]]; then
    echo "The directory \"$1\" already exists!";
    return;
  fi

  mkdir -p $newdir;
  rm -rf $newdir;

  tempdir="`key 8`";
  git clone git@github.com:jrc03c/project-templates $tempdir;
  mv $tempdir/$template $newdir;
  rm -rf $tempdir;
  cd $newdir;

  if [[ -d ".git" ]]; then
    rm -rf ".git";
  fi

  npm install;
  git init;
  git add . --all;
  git commit -m "...";
}
```

# Usage

```bash
scaffold <template> <project-name>
```

For example, to use the "base" template as the basis for a project called "foo", do:

```bash
scaffold base foo
```

When all is done, you'll have a new project with a new (local) git repo and with all JS dependencies installed.
