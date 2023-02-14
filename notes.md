# Module 19: 
- [21.1: ](#21.1-)
- [21.2: ](#21.2-)
- [21.3: ](#21.3-)
---

## 21.1: 

---
## 21.2: 
### MERN Setup

---
### useQuery
- We learned about hooks.
- This is not a hook.

```
const Home = () => {
	const { loading, data } = useQuery(QUERY_PROFILES)
	const profiles = data?profiles || []
	
	return {
		<main>
			<div className=""
			...
	}
}
```

---
### useMutation
- Similar to useQuery, but writing data.
- Functions like a function you call.
- You set up the mutation and call it from elsewhere.
- Wait, this is a hook.

```
const [addProfile, { error }] = useMutation(ADD_PROFILE)
```

- This is set up and can be later called like a function.
- The actual query is elsewhere.
- useMutation is a “preparation function”.
- You have to warn Apollo.
- Hooks are preparation functions.

---
### Apollo Cache
- This uses in-memory cache.
- Caching can be problematic or dangerous. Needs to be set up right.
- You need code that updates the cache.
- There may be situations where you don’t want to use cache, just because there’s too much overhead.
- There’s an `update` hooks in this case.
- This just moves a new object (or maybe removes or edits one), rather than fetching everything.
- We’re talking about a server cache, not a client cache.

---
### React Router
- This uses the history API.
- This means the browser doesn’t need to refresh the page.
- Without this, it may take seconds to change something on the page.
- Things are different in the React world (compared to Handlebars).
- Each page is a React component.
- You have to use `Link` too, which kinda work like anchor links.
- In short, it lets a user interact with an app without reloading the page.
- You need to import `useParams`.

```
...
<Router>
	<Routes>
		<Route>
			path="/"
			element="{<Home />}"
		</Routes>
		<Route>
			path="/profiles/:profileId"
				element="{<Profile />}"
		</Routes>
	</Routes>
</Router>
...
```

---
## 19.3: 

---
