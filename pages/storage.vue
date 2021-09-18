<template>
    <main>
        <logo/>
        <div class="dark:bg-image-dark-storage bg-image-storage hero bg-center">
            <div class="center">
                <h1 class="bg-yellow-500">
                    Storage
                </h1>

                <div class="intro" id="intro">
                    <p>
                        We need to use storage to save data like cache, images, or CSV files. We can have different
                        storage types. All storage classes use the same interface:
                        <em>quillstack/storage-interface</em>, to make it easier.
                        <span id="toc"></span>
                    </p>
                </div>
            </div>
        </div>
        <div class="center">
            <div class="toc list" ref="toc">
                <ul>
                    <li>
                        <a href="#" v-scroll-to="'#interface'">
                            Storage interface
                        </a>
                    </li>
                    <li>
                        <a href="#" v-scroll-to="'#local'">
                            Local storage
                        </a>
                        <ol>
                            <li>
                                <a href="#" v-scroll-to="'#local-installation'">
                                    Installation
                                </a>
                            </li>
                            <li>
                                <a href="#" v-scroll-to="'#local-usage'">
                                    Usage
                                </a>
                            </li>
                        </ol>
                    </li>
                </ul>
            </div>
        </div>
        <div class="center">
            <h2 id="interface">
                Storage interface
                <a class="anchor" href="#" v-scroll-to="'#interface'">¶</a>
            </h2>
            <p>
                Storage interface has been created to keep all storage classes consistent. It requires implementing
                of five simple methods:
            </p>
            <div class="list">
                <ol>
                    <li><span class="code">get()</span> - Retrieves the contents of a file.</li>
                    <li><span class="code">exists()</span> - Checks if the file exists on the storage.</li>
                    <li><span class="code">missing()</span> - Checks if the file is missing from the storage.</li>
                    <li><span class="code">save()</span> - Saves the contents to the file.</li>
                    <li><span class="code">delete()</span> - Deletes one or more files.</li>
                </ol>
            </div>
        </div>
        <hr/>
        <div class="center">
            <h2 id="local">
                Local storage
                <a class="anchor" href="#" v-scroll-to="'#local'">¶</a>
            </h2>
            <p>
                Local storage uses native PHP functions like <span class="code">file_get_contents</span> and
                <span class="code">file_put_contents</span> to read and save files. It also uses
                <span class="code">is_file</span> and <span class="code">unlink</span> function to check if a file
                exists on the disk and to delete it.
            </p>
            <p>
                It's a simple wrapper, but it organises the way how your application works with the local files. It
                also introduces easy to manage exceptions:
            </p>
            <div class="list">
                <ol>
                    <li>
                        <span class="code">LocalStorageException</span> - General exception, not thrown by this library,
                        but every exception extends it.
                    </li>
                    <li>
                        <span class="code">LocalFileNotDeletedException</span> - Problem with deleting a file.
                    </li>
                    <li>
                        <span class="code">LocalFileNotExistsException</span> - Thrown only during an attempt of
                        reading a file that doesn't exist.
                    </li>
                    <li>
                        <span class="code">LocalFileNotSavedException</span> - Problem with storage a file on disk.
                    </li>
                </ol>
            </div>
            <h3 id="local-installation">
                Installation
                <a class="anchor" href="#" v-scroll-to="'#local-installation'">¶</a>
            </h3>
            <p class="before-code">
                To install the local storage package, run the standard command using <em>Composer</em>:
            </p>
        </div>
        <code-php :colors="false" :lines="composerLocal"/>
        <div class="center">
            <p>
                The package will be ready to use after that.
            </p>
            <h3 id="local-usage">
                Usage
                <a class="anchor" href="#" v-scroll-to="'#local-usage'">¶</a>
            </h3>
            <p class="before-code">
                Create a class or inject it as a dependency:
            </p>
        </div>
        <code-php :lines="simpleUsage"/>
        <div class="center">
            <p class="before-code">
                If you want to use it as a dependency:
            </p>
        </div>
        <code-php :lines="dependencyUsage"/>

        <page-footer photo-by-name="Evgeni Evgeniev" photo-by-url="https://unsplash.com/@evgenievgenief"/>
    </main>
</template>

<script>
import Logo from "../components/Logo";
import CodePhp from "../components/CodePhp";
import PageFooter from "../components/PageFooter";
export default {
    components: {PageFooter, CodePhp, Logo},
    head() {
        return {
            title: 'Storage - Quillstack',
            htmlAttrs: {
                class: this.$store.state.mode.dark ? 'dark' : ''
            }
        }
    },
    data() {
        return {
            composerLocal: [
                "composer require quillstack/local-storage",
            ],
            simpleUsage: [
                "use Quillstack\\LocalStorage\\LocalStorage;",
                "",
                "$storage = new LocalStorage();",
                "$storage->save('var/cache/token.txt', 'muHaloosPps23sKkdsaaBBcei');",
            ],
            dependencyUsage: [
                "use Quillstack\\LocalStorage\\LocalStorage;",
                "",
                "public function __construct(private LocalStorage $storage)",
                "{",
                "    //",
                "}",
                "",
                "public function getTokenFromCache()",
                "{",
                "    $this->storage->get('var/cache/token.txt');",
                "}",
            ]
        }
    }
}
</script>
