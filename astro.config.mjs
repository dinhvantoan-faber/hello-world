// @ts-check
import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY;
const repoName = repository?.split('/')[1];
const isUserSite = repoName?.endsWith('.github.io');
const base = isUserSite ? '/' : repoName ? `/${repoName}/` : '/';

// https://astro.build/config
export default defineConfig({
	site: 'https://dinhvantoan-faber.github.io',
	base,
});
