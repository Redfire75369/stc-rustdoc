window.SIDEBAR_ITEMS = {"enum":[["Diff","A type returned by the [`diff_with`] function."],["Either","The enum `Either` with variants `Left` and `Right` is a general purpose sum type with two cases."],["EitherOrBoth","Value that either holds a single A or B, or both."],["FoldWhile","An enum used for controlling the execution of `fold_while`."],["MinMaxResult","`MinMaxResult` is an enum returned by `minmax`."],["Position","A value yielded by `WithPosition`. Indicates the position of this element in the iterator results."]],"fn":[["all","Test whether the predicate holds for all elements in the iterable."],["any","Test whether the predicate holds for any elements in the iterable."],["assert_equal","Assert that two iterables produce equal sequences, with the same semantics as `equal(a, b)`."],["chain","Create an iterator that first iterates `i` and then `j`."],["cloned","Create an iterator that clones each element from &T to T"],["concat","Combine all an iterator’s elements into one element by using [`Extend`]."],["cons_tuples","Create an iterator that maps for example iterators of `((A, B), C)` to `(A, B, C)`."],["diff_with","Compares every element yielded by both `i` and `j` with the given function in lock-step and returns a [`Diff`] which describes how `j` differs from `i`."],["enumerate","Iterate `iterable` with a running index."],["equal","Return `true` if both iterables produce equal sequences (elements pairwise equal and sequences of the same length), `false` otherwise."],["fold","Perform a fold operation over the iterable."],["interleave","Create an iterator that interleaves elements in `i` and `j`."],["iterate","Creates a new iterator that infinitely applies function to value and yields results."],["join","Combine all iterator elements into one String, seperated by `sep`."],["kmerge","Create an iterator that merges elements of the contained iterators using the ordering function."],["kmerge_by","Create an iterator that merges elements of the contained iterators."],["max","Return the maximum value of the iterable."],["merge","Create an iterator that merges elements in `i` and `j`."],["merge_join_by","Return an iterator adaptor that merge-joins items from the two base iterators in ascending order."],["min","Return the minimum value of the iterable."],["multipeek","An iterator adaptor that allows the user to peek at multiple `.next()` values without advancing the base iterator."],["multizip","An iterator that generalizes .zip() and allows running multiple iterators in lockstep."],["partition","Partition a sequence using predicate `pred` so that elements that map to `true` are placed before elements which map to `false`."],["peek_nth","A drop-in replacement for [`std::iter::Peekable`] which adds a `peek_nth` method allowing the user to `peek` at a value several iterations forward without advancing the base iterator."],["process_results","“Lift” a function of the values of an iterator so that it can process an iterator of `Result` values instead."],["put_back","Create an iterator where you can put back a single item"],["put_back_n","Create an iterator where you can put back multiple values to the front of the iteration."],["rciter","Return an iterator inside a `Rc<RefCell<_>>` wrapper."],["repeat_call","An iterator source that produces elements indefinitely by calling a given closure."],["repeat_n","Create an iterator that produces `n` repetitions of `element`."],["rev","Iterate `iterable` in reverse."],["sorted","Sort all iterator elements into a new iterator in ascending order."],["unfold","Creates a new unfold source with the specified closure as the “iterator function” and an initial state to eventually pass to the closure"],["zip","Iterate `i` and `j` in lock step."],["zip_eq","Iterate `i` and `j` in lock step."]],"macro":[["chain","Chain zero or more iterators together into one sequence."],["iproduct","Create an iterator over the “cartesian product” of iterators."],["izip","Create an iterator running multiple iterators in lockstep."]],"mod":[["structs","The concrete iterator types."],["traits","Traits helpful for using certain `Itertools` methods in generic contexts."]],"trait":[["Itertools","An [`Iterator`] blanket implementation that provides extra adaptors and methods."],["PeekingNext","An iterator that allows peeking at an element before deciding to accept it."]]};