# Rules:

# Rubric:

## MVP:

1. Display includes a text area that shows the current generation of cells being displayed
2. Display includes a grid of cells, at least 25x25, that can be toggled to be alive or dead
3. Display includes working buttons that start / stop the animation and clear the grid
4. Algorithm to generate new generations of cells correctly implemented
5. At least 3 features from Custom Features section successfully implemented

   - Create a few sample cell configurations that users can load and run

   * Add an option that creates a random cell configuration that users can run
   * Add additional cell properties, like color or size, and incorporate them into your visualization
   * Allow users to specify the speed of the simulation
   * Provide functionality to manually step through the simulation one generation at a time, as opposed to animating automatically
   * Allow users to change the dimension of the grid being displayed
   * Given a specific generation, calculate the configuration of cells at that point in time, and jump to that state, bypassing animation (i.e. skip ahead n generations).
   * If you have an idea for a custom feature on this list, run it by your TL or instructor

6. Application includes a section outlining the rules to Conway's "Game of Life"

## Stretch

#### Requires 1 of the folllowing

- Implement 2+ additional custom features, above
- Deploy your app to a hosting service or, for iOS, to TestFlight (or the App Store!). Web devs can see more deployment info here.
- Write a how-to guide or blog post that walks readers through the work you did to implement your project

# Process

## Started with Tutorial

### [Tutorial Link](https://www.freecodecamp.org/news/create-gameoflife-with-react-in-one-hour-8e686a410174/)

1. Research - This entailed reading the Repo several times, reading articles and watching youtube videos on what Conway's Game of life is, and then reading articles/watching videos on ways to code it.
2. I did a CRA, created specific .js files and .css files.
3. Updated Notes.md and README.md as necessary.
4. Added code to build grid in Game.js and Game.css.
5. Deleted yarn.lock
6. Started file and viewed grid.
7. Added some CSS to make grid more viewable.
8. Lunch
9. Added state and method to generate cell lists.
10. Added methods to find board element positions and a handleclick.
11. Renamed some things for easier readability.
12. Added state to cells.
13. Styled cells.
14. Fixed compiling errors.
15. Read over Rubric again.
16. Created a rules file, added to App.js, gave basic styling.
17. Created clicking buttons, input field.
18. Added custom features to rubric in Notes.md
19. Read over assessment info and calendar for Friday.
20. Added stretch info to rubric section.
21. Evaluated rubric rules as tutorial had an extra (Any live cell with more than three live neighbors dies, as if by overpopulation.).
22. Added neighbors count method.
23. Tested rules.

## Rework Process

1. Evaluated how to get rid of extra rule.
2. Changed sizing and colors.
3. Realized this threw off the onclick.
4. Added more CSS.
5. Added button for clearing grid. Needs functionality.
6. Added text for display of selected cells. Needs functionality.
