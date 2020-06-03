module TodoList.Derive exposing (..)
import Dict  
import Html  
import Html.Attributes  
import Json.Encode  
import Json.Decode  
import Random  
import TodoList  exposing (..)

randomBool : Random.Generator Bool
randomBool  =
    Random.uniform True [False]

randomInt : Random.Generator Int
randomInt  =
    Random.int 0 100

randomString : Random.Generator String
randomString  =
    Random.uniform "Alpha" ["Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliet ", "Kilo", "Lima", "Mike", "Novenber", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray", "Yankee", "Zulu"]

randomFloat : Random.Generator Float
randomFloat  =
    Random.float 0 1

randomList : Random.Generator a -> Random.Generator (List a)
randomList gen =
    Random.andThen (\n -> Random.list (3 + n) gen) (Random.int 0 7)

randomMaybe : Random.Generator a -> Random.Generator (Maybe a)
randomMaybe gen =
    Random.andThen (\n -> Random.uniform Nothing [Just n]) gen

randomDict : Random.Generator a -> Random.Generator (Dict.Dict String a)
randomDict gen =
    Random.map Dict.fromList (randomList (Random.map2 (\k v -> (k, v)) randomString gen))

randomTask : Random.Generator Task
randomTask  =
    (Random.map3 (\id description completed -> {id = id, description = description, completed = completed}) randomInt randomString randomBool)

randomTodoList : Random.Generator TodoList
randomTodoList  =
    (Random.map2 (\tasks field -> {tasks = tasks, field = field}) (randomList randomTask) randomString)

randomTree : Random.Generator Tree
randomTree  =
    let
      
      
      leaf () =
          Random.map Leaf randomString
      
      
      branch () =
          Random.map2 Branch randomTree randomTree
    in
      Random.andThen ((|>) ()) (Random.uniform leaf [branch])

randomColor : Random.Generator Color
randomColor  =
    let
      
      
      red () =
          Random.constant Red
      
      
      green () =
          Random.constant Green
      
      
      blue () =
          Random.constant Blue
    in
      Random.andThen ((|>) ()) (Random.uniform red [green, blue])

randomVector : Random.Generator Vector
randomVector  =
    let
      
      
      vector () =
          Random.map Vector (Random.map2 (\x y -> {x = x, y = y}) randomFloat randomFloat)
    in
      Random.andThen ((|>) ()) (Random.uniform vector [])

randomGrid : Random.Generator Grid
randomGrid  =
    (randomList (randomList randomInt))

randomDictionary : Random.Generator Dictionary
randomDictionary  =
    (randomDict randomInt)