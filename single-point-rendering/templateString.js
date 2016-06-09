export default function (data) {
  return `
  <div id="content" class="mw-body" role="main">
    <h1 id="firstHeading" class="firstHeading" lang="en">Benchmark (computing)</h1>
    <div id="bodyContent" class="mw-body-content">
      <div id="siteSub">From Wikipedia, the free encyclopedia</div>
      <div id="contentSub"></div>
      <div id="jump-to-nav" class="mw-jump"> Jump to: <a href="#mw-head">navigation</a>, <a href="#p-search">search</a> </div>
      <div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr">
        <div role="note" class="hatnote">This article is about the use of benchmarks in computing. For other uses, see <a href="/wiki/Benchmark_(disambiguation)" class="mw-redirect mw-disambig" title="Benchmark (disambiguation)">Benchmark (disambiguation)</a>.</div>
        <table class="metadata plainlinks ambox ambox-content ambox-Refimprove" role="presentation">
          <tbody>
            <tr>
              <td class="mbox-image">
                <div >
                  <a href="/wiki/File:Question_book-new.svg" class="image"><img alt="" src="//upload.wikimedia.org/wikipedia/en/thumb/9/99/Question_book-new.svg/50px-Question_book-new.svg.png" width="50" height="39" srcset="//upload.wikimedia.org/wikipedia/en/thumb/9/99/Question_book-new.svg/75px-Question_book-new.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/9/99/Question_book-new.svg/100px-Question_book-new.svg.png 2x" data-file-width="262" data-file-height="204"/> </a>
                </div>
              </td>
              <td class="mbox-text"><span class="mbox-text-span">This article <b>needs additional citations for <a href="/wiki/Wikipedia:Verifiability" title="Wikipedia:Verifiability">verification</a></b>. <span class="hide-when-compact">Please help <a class="external text" href="//en.wikipedia.org/w/index.php?title=Benchmark_(computing)&amp;action=edit">improve this article</a> by <a href="/wiki/Help:Introduction_to_referencing_with_Wiki_Markup/1" title="Help:Introduction to referencing with Wiki Markup/1">adding citations to reliable sources</a>. Unsourced material may be challenged and removed.</span> <small><i>(July 2015)</i></small> <small class="hide-when-compact"><i>(<a href="/wiki/Help:Maintenance_template_removal" title="Help:Maintenance template removal">Learn how and when to remove this template message</a>)</i></small> </span>
              </td>
            </tr>
          </tbody>
        </table>
        <p>In <a href="/wiki/Computing" title="Computing">computing</a>, a <b>benchmark</b> is the act of running a <a href="/wiki/Computer_program" title="Computer program">computer program</a>, a set of programs, or other operations, in order to assess the relative <b>performance</b> of an object, normally by running a number of standard tests and trials against it. The term 'benchmark' is also mostly utilized for the purposes of elaborately designed benchmarking programs themselves.</p>
        <p>Benchmarking is usually associated with assessing performance characteristics of computer hardware, for example, the floating point operation performance of a <a href="/wiki/Central_processing_unit" title="Central processing unit">CPU</a>, but there are circumstances when the technique is also applicable to software. Software benchmarks are, for example, run against <a href="/wiki/Compiler" title="Compiler">compilers</a> or <a href="/wiki/Database_management_system" class="mw-redirect" title="Database management system">database management systems</a>.</p>
        <p>Benchmarks provide a method of comparing the performance of various subsystems across different chip/system architectures.</p>
        <p><a href="/wiki/Test_suite" title="Test suite">Test suites</a> are a type of system intended to assess the <b>correctness</b> of software.</p>
        <p></p>
        <div id="toc" class="toc">
          <div id="toctitle">
            <h2>Contents</h2> <span class="toctoggle">&nbsp;[<a href="#" id="togglelink">hide</a>]&nbsp;</span> </div>
          <ul>
            <li class="toclevel-1 tocsection-1"><a href="#Purpose"><span class="tocnumber">1</span> <span class="toctext">Purpose</span></a> </li>
            <li class="toclevel-1 tocsection-2"><a href="#Challenges"><span class="tocnumber">2</span> <span class="toctext">Challenges</span></a> </li>
            <li class="toclevel-1 tocsection-3"><a href="#Types_of_benchmarks"><span class="tocnumber">3</span> <span class="toctext">Types of benchmarks</span></a> </li>
            <li class="toclevel-1 tocsection-4"><a href="#Common_benchmarks"><span class="tocnumber">4</span> <span class="toctext">Common benchmarks</span></a>
              <ul>
                <li class="toclevel-2 tocsection-5"><a href="#Industry_standard_.28audited_and_verifiable.29"><span class="tocnumber">4.1</span> <span class="toctext">Industry standard (audited and verifiable)</span></a> </li>
                <li class="toclevel-2 tocsection-6"><a href="#Open_source_benchmarks"><span class="tocnumber">4.2</span> <span class="toctext">Open source benchmarks</span></a> </li>
                <li class="toclevel-2 tocsection-7"><a href="#Microsoft_Windows_benchmarks"><span class="tocnumber">4.3</span> <span class="toctext">Microsoft Windows benchmarks</span></a> </li>
                <li class="toclevel-2 tocsection-8"><a href="#Others"><span class="tocnumber">4.4</span> <span class="toctext">Others</span></a> </li>
              </ul>
            </li>
            <li class="toclevel-1 tocsection-9"><a href="#See_also"><span class="tocnumber">5</span> <span class="toctext">See also</span></a> </li>
            <li class="toclevel-1 tocsection-10"><a href="#References"><span class="tocnumber">6</span> <span class="toctext">References</span></a> </li>
            <li class="toclevel-1 tocsection-11"><a href="#Further_reading"><span class="tocnumber">7</span> <span class="toctext">Further reading</span></a> </li>
            <li class="toclevel-1 tocsection-12"><a href="#External_links"><span class="tocnumber">8</span> <span class="toctext">External links</span></a> </li>
          </ul>
        </div>
        <p>${data.text}</p>
        <h2><span class="mw-headline" id="Purpose">Purpose</span></h2>
        <p>As <a href="/wiki/Computer_architecture" title="Computer architecture">computer architecture</a> advanced, it became more difficult to compare the performance of various computer systems simply by looking at their specifications. Therefore, tests were developed that allowed comparison of different architectures. For example, <a href="/wiki/Pentium_4" title="Pentium 4">Pentium 4</a> processors generally operate at a higher clock frequency than <a href="/wiki/Athlon_XP" class="mw-redirect" title="Athlon XP">Athlon XP</a> processors, which does not necessarily translate to more computational power. A slower processor, with regard to clock frequency, may perform as well as a processor operating at a higher frequency. See <a href="/wiki/BogoMips" title="BogoMips">BogoMips</a> and the <a href="/wiki/Megahertz_myth" title="Megahertz myth">megahertz myth</a>.</p>
        <p>Benchmarks are designed to mimic a particular type of workload on a component or system. Synthetic benchmarks do this by specially created programs that impose the workload on the component. Application benchmarks run real-world programs on the system. While application benchmarks usually give a much better measure of real-world performance on a given system, synthetic benchmarks are useful for testing individual components, like a <a href="/wiki/Hard_disk" class="mw-redirect" title="Hard disk">hard disk</a> or networking device.</p>
        <p>Benchmarks are particularly important in <a href="/wiki/CPU_design" class="mw-redirect" title="CPU design">CPU design</a>, giving processor architects the ability to measure and make tradeoffs in <a href="/wiki/Microarchitecture" title="Microarchitecture">microarchitectural</a> decisions. For example, if a benchmark extracts the key <a href="/wiki/Algorithms" class="mw-redirect" title="Algorithms">algorithms</a> of an application, it will contain the performance-sensitive aspects of that application. Running this much smaller snippet on a cycle-accurate simulator can give clues on how to improve performance.</p>
        <p>Prior to 2000, computer and microprocessor architects used <a href="/wiki/SPEC" class="mw-redirect" title="SPEC">SPEC</a> to do this, although SPEC's Unix-based benchmarks were quite lengthy and thus unwieldy to use intact.</p>
        <p>Computer manufacturers are known to configure their systems to give unrealistically high performance on benchmark tests that are not replicated in real usage. For instance, during the 1980s some compilers could detect a specific mathematical operation used in a well-known floating-point benchmark and replace the operation with a faster mathematically equivalent operation. However, such a transformation was rarely useful outside the benchmark until the mid-1990s, when <a href="/wiki/RISC" class="mw-redirect" title="RISC">RISC</a> and <a href="/wiki/VLIW" class="mw-redirect" title="VLIW">VLIW</a> architectures emphasized the importance of <a href="/wiki/Compiler" title="Compiler">compiler</a> technology as it related to performance. Benchmarks are now regularly used by <a href="/wiki/Compiler" title="Compiler">compiler</a> companies to improve not only their own benchmark scores, but real application performance.</p>
        <p>CPUs that have many execution units — such as a <a href="/wiki/Superscalar" class="mw-redirect" title="Superscalar">superscalar</a> CPU, a <a href="/wiki/VLIW" class="mw-redirect" title="VLIW">VLIW</a> CPU, or a <a href="/wiki/Reconfigurable_computing" title="Reconfigurable computing">reconfigurable computing</a> CPU — typically have slower clock rates than a sequential CPU with one or two execution units when built from transistors that are just as fast. Nevertheless, CPUs with many execution units often complete real-world and benchmark tasks in less time than the supposedly faster high-clock-rate CPU.</p>
        <p>Given the large number of benchmarks available, a manufacturer can usually find at least one benchmark that shows its system will outperform another system; the other systems can be shown to excel with a different benchmark.</p>
        <p>Manufacturers commonly report only those benchmarks (or aspects of benchmarks) that show their products in the best light. They also have been known to mis-represent the significance of benchmarks, again to show their products in the best possible light. Taken together, these practices are called <i>bench-marketing.</i> </p>
        <p>Ideally benchmarks should only substitute for real applications if the application is unavailable, or too difficult or costly to port to a specific processor or computer system. If performance is critical, the only benchmark that matters is the target environment's application suite.</p>
        <h2><span class="mw-headline" id="Challenges">Challenges</span></h2>
        <p>Benchmarking is not easy and often involves several iterative rounds in order to arrive at predictable, useful conclusions. Interpretation of benchmarking data is also extraordinarily difficult. Here is a partial list of common challenges:</p>
        <ul>
          <li>Vendors tend to tune their products specifically for industry-standard benchmarks. Norton SysInfo (SI) is particularly easy to tune for, since it mainly biased toward the speed of multiple operations. Use extreme caution in interpreting such results.</li>
          <li>Some vendors have been accused of "cheating" at benchmarks — doing things that give much higher benchmark numbers, but make things worse on the actual likely workload.<sup id="cite_ref-1" class="reference"><a href="#cite_note-1">[1]</a></sup> </li>
          <li>Many benchmarks focus entirely on the speed of <a href="/wiki/Computer_performance" title="Computer performance">computational performance</a>, neglecting other important features of a computer system, such as:
            <ul>
              <li>Qualities of service, aside from raw performance. Examples of unmeasured qualities of service include security, availability, reliability, execution integrity, serviceability, scalability (especially the ability to quickly and nondisruptively add or reallocate capacity), etc. There are often real trade-offs between and among these qualities of service, and all are important in business computing. <a href="/wiki/Transaction_Processing_Performance_Council" title="Transaction Processing Performance Council">Transaction Processing Performance Council</a> Benchmark specifications partially address these concerns by specifying <a href="/wiki/ACID" title="ACID">ACID</a> property tests, database scalability rules, and service level requirements.</li>
              <li>In general, benchmarks do not measure <a href="/wiki/Total_cost_of_ownership" title="Total cost of ownership">Total cost of ownership</a>. Transaction Processing Performance Council Benchmark specifications partially address this concern by specifying that a price/performance metric must be reported in addition to a raw performance metric, using a simplified <a href="/wiki/Total_cost_of_ownership" title="Total cost of ownership">TCO</a> formula. However, the costs are necessarily only partial, and vendors have been known to price specifically (and only) for the benchmark, designing a highly specific "benchmark special" configuration with an artificially low price. Even a tiny deviation from the benchmark package results in a much higher price in real world experience.</li>
              <li>Facilities burden (space, power, and cooling). When more power is used, a portable system will have a shorter battery life and require recharging more often. A server that consumes more power and/or space may not be able to fit within existing data center resource constraints, including cooling limitations. There are real trade-offs as most semiconductors require more power to switch faster. See also <a href="/wiki/Performance_per_watt" title="Performance per watt">performance per watt</a>.</li>
              <li>In some embedded systems, where memory is a significant cost, better <a href="/wiki/Code_density" class="mw-redirect" title="Code density">code density</a> can significantly reduce costs.</li>
            </ul>
          </li>
          <li>Vendor benchmarks tend to ignore requirements for development, test, and <a href="/wiki/Disaster_recovery" title="Disaster recovery">disaster recovery</a> computing capacity. Vendors only like to report what might be narrowly required for production capacity in order to make their initial acquisition price seem as low as possible.</li>
          <li>Benchmarks are having trouble adapting to widely distributed servers, particularly those with extra sensitivity to network topologies. The emergence of <a href="/wiki/Grid_computing" title="Grid computing">grid computing</a>, in particular, complicates benchmarking since some workloads are "grid friendly", while others are not.</li>
          <li>Users can have very different perceptions of performance than benchmarks may suggest. In particular, users appreciate predictability — servers that always meet or exceed <a href="/wiki/Service_level_agreement" class="mw-redirect" title="Service level agreement">service level agreements</a>. Benchmarks tend to emphasize mean scores (IT perspective), rather than maximum worst-case response times (<a href="/wiki/Real-time_computing" title="Real-time computing">real-time computing</a> perspective), or low standard deviations (user perspective).</li>
          <li>Many server architectures degrade dramatically at high (near 100%) levels of usage — "fall off a cliff" — and benchmarks should (but often do not) take that factor into account. Vendors, in particular, tend to publish server benchmarks at continuous at about 80% usage — an unrealistic situation — and do not document what happens to the overall system when demand spikes beyond that level.</li>
          <li>Many benchmarks focus on one application, or even one application tier, to the exclusion of other applications. Most data centers are now implementing <a href="/wiki/Hardware_virtualization" title="Hardware virtualization">virtualization</a> extensively for a variety of reasons, and benchmarking is still catching up to that reality where multiple applications and application tiers are concurrently running on consolidated servers.</li>
          <li>There are few (if any) high quality benchmarks that help measure the performance of batch computing, especially high volume concurrent batch and online computing. <a href="/wiki/Batch_computing" class="mw-redirect" title="Batch computing">Batch computing</a> tends to be much more focused on the predictability of completing long-running tasks correctly before deadlines, such as end of month or end of fiscal year. Many important core business processes are batch-oriented and probably always will be, such as billing.</li>
          <li>Benchmarking institutions often disregard or do not follow basic scientific method. This includes, but is not limited to: small sample size, lack of variable control, and the limited repeatability of results.<sup id="cite_ref-2" class="reference"><a href="#cite_note-2">[2]</a></sup> </li>
        </ul>
        <h2><span class="mw-headline" id="Types_of_benchmarks">Types of benchmarks</span></h2>
        <ol>
          <li>Real program
            <ul>
              <li>word processing software</li>
              <li>tool software of CAD</li>
              <li>user's application software (i.e.: MIS)</li>
            </ul>
          </li>
          <li>Component Benchmark / Microbenchmark
            <ul>
              <li>core routine consists of a relatively small and specific piece of code.</li>
              <li>measure performance of a computer's basic components <sup id="cite_ref-3" class="reference"><a href="#cite_note-3">[3]</a></sup> </li>
              <li>may be used for automatic detection of computer's hardware parameters like number of registers, cache size, memory latency, etc.</li>
            </ul>
          </li>
          <li>Kernel
            <ul>
              <li>contains key codes</li>
              <li>normally abstracted from actual program</li>
              <li>popular kernel: Livermore loop</li>
              <li>linpack benchmark (contains basic linear algebra subroutine written in FORTRAN language)</li>
              <li>results are represented in MFLOPS</li>
            </ul>
          </li>
          <li>Synthetic Benchmark
            <ul>
              <li>Procedure for programming synthetic benchmark:
                <ul>
                  <li>take statistics of all types of operations from many application programs</li>
                  <li>get proportion of each operation</li>
                  <li>write program based on the proportion above</li>
                </ul>
              </li>
              <li>Types of Synthetic Benchmark are:
                <ul>
                  <li><a href="/wiki/Whetstone_(benchmark)" title="Whetstone (benchmark)">Whetstone</a> </li>
                  <li><a href="/wiki/Dhrystone" title="Dhrystone">Dhrystone</a> </li>
                </ul>
              </li>
              <li>These were the first general purpose industry standard computer benchmarks. They do not necessarily obtain high scores on modern pipelined computers.</li>
            </ul>
          </li>
          <li>I/O benchmarks</li>
          <li>Database benchmarks: to measure the throughput and response times of database management systems (DBMS')</li>
          <li>Parallel benchmarks: used on machines with multiple cores, processors or systems consisting of multiple machines</li>
        </ol>
        <h2><span class="mw-headline" id="Common_benchmarks">Common benchmarks</span></h2>
        <h3><span class="mw-headline" id="Industry_standard_.28audited_and_verifiable.29">Industry standard (audited and verifiable)</span></h3>
        <ul>
          <li><a href="/wiki/BAPCo_consortium" title="BAPCo consortium">Business Applications Performance Corporation (BAPCo)</a> </li>
          <li><a href="/wiki/EEMBC" title="EEMBC">Embedded Microprocessor Benchmark Consortium (EEMBC)</a> </li>
          <li><a href="/wiki/Standard_Performance_Evaluation_Corporation" title="Standard Performance Evaluation Corporation">Standard Performance Evaluation Corporation</a> (SPEC), in particular their <a href="/wiki/SPECint" title="SPECint">SPECint</a> and <a href="/wiki/SPECfp" title="SPECfp">SPECfp</a> </li>
          <li><a href="/wiki/Transaction_Processing_Performance_Council" title="Transaction Processing Performance Council">Transaction Processing Performance Council</a> (TPC)</li>
          <li><a href="/wiki/Coremark" title="Coremark">Coremark</a>: Embedded computing benchmark</li>
        </ul>
        <h3><span class="mw-headline" id="Open_source_benchmarks">Open source benchmarks</span></h3>
        <ul>
          <li><a href="/wiki/AIM_Multiuser_Benchmark" title="AIM Multiuser Benchmark">AIM Multiuser Benchmark</a>: composed of a list of tests that could be mixed to create a ‘load mix’ that would simulate a specific computer function on any UNIX-type OS.</li>
          <li><a href="/wiki/Bonnie%2B%2B" title="Bonnie++">Bonnie++</a>: filesystem and hard drive benchmark</li>
          <li><a href="/wiki/BRL-CAD" title="BRL-CAD">BRL-CAD</a>: cross-platform architecture-agnostic benchmark suite based on multithreaded ray tracing performance; baselined against a VAX-11/780; and used since 1984 for evaluating relative CPU performance, compiler differences, optimization levels, coherency, architecture differences, and operating system differences.</li>
          <li><a href="/wiki/Coremark" title="Coremark">Coremark</a>: Integer benchmarks designed to address the flaws of <a href="/wiki/Dhrystone" title="Dhrystone">Dhrystone</a> </li>
          <li><a href="/wiki/DEISA_Benchmark_Suite" class="mw-redirect" title="DEISA Benchmark Suite">DEISA Benchmark Suite</a>: scientific HPC applications benchmark</li>
          <li><a href="/wiki/Dhrystone" title="Dhrystone">Dhrystone</a>: integer arithmetic performance, often reported in DMIPS (Dhrystone millions of instructions per second)</li>
          <li><a href="/wiki/Fhourstones" title="Fhourstones">Fhourstones</a>: an integer benchmark</li>
          <li><a href="/wiki/Hierarchical_INTegration" title="Hierarchical INTegration">HINT</a>: designed to measure overall CPU and memory performance</li>
          <li><a href="/w/index.php?title=Ioblazer&amp;action=edit&amp;redlink=1" class="new" title="Ioblazer (page does not exist)">ioblazer</a>: I/O benchmark from vmware runs on Linux, Windows and OSX.<sup class="noprint Inline-Template" >[<i><a href="/wiki/Wikipedia:INDISCRIMINATE" class="mw-redirect" title="Wikipedia:INDISCRIMINATE"><span title="The material preceding this tag may lack sufficient importance.">importance?</span></a></i>]</sup> </li>
          <li><a href="/wiki/Iometer" title="Iometer">Iometer</a>: I/O subsystem measurement and characterization tool for single and clustered systems.</li>
          <li><a href="/wiki/IOzone" title="IOzone">IOzone</a>: Filesystem benchmark</li>
          <li><a href="/wiki/LINPACK_benchmarks" title="LINPACK benchmarks">LINPACK benchmarks</a>, traditionally used to measure <a href="/wiki/FLOPS" title="FLOPS">FLOPS</a> </li>
          <li><a href="/wiki/LAPACK" title="LAPACK">LAPACK</a><sup class="noprint Inline-Template Template-Fact" >[<i><a href="/wiki/Wikipedia:Citation_needed" title="Wikipedia:Citation needed"><span title="This claim needs references to reliable sources. (August 2011)">citation needed</span></a></i>]</sup> </li>
          <li><a href="/wiki/Livermore_loops" title="Livermore loops">Livermore loops</a> </li>
          <li><a href="/wiki/NAS_benchmarks" class="mw-redirect" title="NAS benchmarks">NAS parallel benchmarks</a> </li>
          <li><a href="/wiki/NBench" title="NBench">NBench</a>: synthetic benchmark suite measuring performance of integer arithmetic, memory operations, and floating-point arithmetic</li>
          <li><a href="/wiki/PAL_(software)" class="mw-redirect" title="PAL (software)">PAL</a>: a benchmark for realtime physics engines</li>
          <li><a href="/wiki/PerfKitBenchmarker" title="PerfKitBenchmarker">PerfKitBenchmarker</a>: A set of benchmarks to measure and compare cloud offerings.</li>
          <li><a href="/wiki/Phoronix_Test_Suite" title="Phoronix Test Suite">Phoronix Test Suite</a>: open-source cross-platform benchmarking suite for Linux, OpenSolaris, FreeBSD, OSX and Windows. It includes a number of other benchmarks included on this page to simplify execution.</li>
          <li><a href="/wiki/POV-Ray" title="POV-Ray">POV-Ray</a>: 3D render</li>
          <li><a href="/wiki/Tak_(function)" title="Tak (function)">Tak (function)</a>: a simple benchmark used to test recursion performance</li>
          <li><a href="/wiki/TATP_Benchmark" title="TATP Benchmark">TATP Benchmark</a>: Telecommunication Application Transaction Processing Benchmark</li>
          <li><a href="/wiki/TPoX" class="mw-redirect" title="TPoX">TPoX</a>: An XML transaction processing benchmark for XML databases</li>
          <li><a href="/wiki/VAX_Unit_of_Performance" title="VAX Unit of Performance">VUP</a> (VAX unit of performance), also called VAX <a href="/wiki/Instructions_per_second" title="Instructions per second">MIPS</a> </li>
          <li><a href="/wiki/Whetstone_(benchmark)" title="Whetstone (benchmark)">Whetstone</a>: floating-point arithmetic performance, often reported in millions of Whetstone instructions per second (MWIPS)</li>
          <li><a rel="nofollow" class="external text" href="http://www.primatelabs.com/">Geek Benchmark</a>: For finding integer, floating point performance and memory performance</li>
          <li><a rel="nofollow" class="external text" href="https://www.cs.virginia.edu/~skadron/wiki/rodinia/index.php/Main_Page">Rodinia</a>: Benchmark for parallel architectures based on accelerators.</li>
          <li><a rel="nofollow" class="external text" href="http://parsec.cs.princeton.edu">Parsec</a>: Benchmark for parallel shared memory systems.</li>
          <li><a rel="nofollow" class="external text" href="http://www.capsl.udel.edu/splash/index.html">Splash2</a>: Benchmark for parallel systems.</li>
          <li><a rel="nofollow" class="external text" href="http://www.cs.virginia.edu/stream/">STREAM</a>: Benchmark for measuring memory bandwidth of a system.</li>
          <li><a rel="nofollow" class="external text" href="http://icl.cs.utk.edu/projects/llcbench/">LLCbench</a>: Low Level Architectural Characterization Benchmark Suite, used to measure CPU and memory performance of a system.</li>
        </ul>
        <h3><span class="mw-headline" id="Microsoft_Windows_benchmarks">Microsoft Windows benchmarks</span></h3>
        <ul>
          <li><a href="/wiki/BAPCo_consortium" title="BAPCo consortium">BAPCo</a>: MobileMark, SYSmark, WebMark</li>
          <li><a href="/wiki/Futuremark" title="Futuremark">Futuremark</a>: <a href="/wiki/3DMark" title="3DMark">3DMark</a>, <a href="/wiki/PCMark" title="PCMark">PCMark</a> </li>
          <li><a href="/wiki/Whetstone_(benchmark)" title="Whetstone (benchmark)">Whetstone</a> </li>
          <li><a href="/wiki/Worldbench" class="mw-redirect" title="Worldbench">Worldbench</a> (discontinued)</li>
          <li><a href="/wiki/PiFast" class="mw-redirect" title="PiFast">PiFast</a> </li>
          <li><a href="/wiki/SuperPrime" title="SuperPrime">SuperPrime</a> </li>
          <li><a href="/wiki/Super_PI" title="Super PI">Super PI</a> </li>
          <li><a href="/wiki/Windows_System_Assessment_Tool" title="Windows System Assessment Tool">Windows System Assessment Tool</a>, included with Microsoft Windows Vista and later Windows operating systems, providing an index for consumers to rate their systems easily</li>
        </ul>
        <h3><span class="mw-headline" id="Others">Others</span></h3>
        <ul>
          <li><a href="/wiki/AnTuTu" title="AnTuTu">AnTuTu</a> - commonly used on phones and Arm devices.</li>
          <li><a href="/wiki/Khornerstone" title="Khornerstone">Khornerstone</a> </li>
          <li><a href="/wiki/ICOMP_(index)" title="ICOMP (index)">iCOMP</a>, the Intel comparative microprocessor performance, published by Intel</li>
          <li><a href="/wiki/Performance_Rating" title="Performance Rating">Performance Rating</a>, modeling scheme used by AMD and Cyrix to reflect the relative performance usually compared to competing products.</li>
          <li><a href="/wiki/VMmark" title="VMmark">VMmark</a>, a virtualization benchmark suite.<sup id="cite_ref-4" class="reference"><a href="#cite_note-4">[4]</a></sup> </li>
          <li><a href="/wiki/SunSpider_JavaScript_Benchmark" class="mw-redirect" title="SunSpider JavaScript Benchmark">Sunspider</a>, a Browser speed test</li>
          <li><a href="/w/index.php?title=BreakingPoint_Systems&amp;action=edit&amp;redlink=1" class="new" title="BreakingPoint Systems (page does not exist)">BreakingPoint Systems</a>, modeling and simulation of network application traffic for benchmarking servers and network equipment</li>
          <li><cite class="citation web">Glaesemann, K. R.; van Dam, H. J. J.; Carr, J. F. (2011). <a rel="nofollow" class="external text" href="http://www.emsl.pnl.gov/capabilities/computing/msc/msc_benchmark/">"MSC Benchmark 1.0"</a>. <i>Pacific Northwest National Lab</i>.</cite><span title="ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABenchmark+%28computing%29&amp;rft.atitle=MSC+Benchmark+1.0&amp;rft.au=Carr%2C+J.+F.&amp;rft.aufirst=K.+R.&amp;rft.aulast=Glaesemann&amp;rft.au=van+Dam%2C+H.+J.+J.&amp;rft.date=2011&amp;rft.genre=unknown&amp;rft_id=http%3A%2F%2Fwww.emsl.pnl.gov%2Fcapabilities%2Fcomputing%2Fmsc%2Fmsc_benchmark%2F&amp;rft.jtitle=Pacific+Northwest+National+Lab&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal" class="Z3988"><span >&nbsp;</span></span>, a benchmark for testing massively parallel computer systems under simultaneously heavy network, memory, and CPU loads.</li>
        </ul>
        <h2><span class="mw-headline" id="See_also">See also</span></h2>
        <ul>
          <li><a href="/wiki/Benchmarking" title="Benchmarking">Benchmarking</a> (business perspective)</li>
          <li><a href="/wiki/Figure_of_merit" title="Figure of merit">Figure of merit</a> </li>
          <li><a href="/wiki/Performance_Counter_Monitor" class="mw-redirect" title="Performance Counter Monitor">Performance Counter Monitor</a> </li>
          <li><a href="/wiki/Test_suite" title="Test suite">Test suite</a>&nbsp;– a collection of test cases intended to show that a software program has some specified set of behaviors</li>
        </ul>
        <h2><span class="mw-headline" id="References">References</span></h2>
        <ol class="references">
          <li id="cite_note-1"><span class="mw-cite-backlink"><b><a href="#cite_ref-1"><span class="cite-accessibility-label">Jump up </span>^</a>
            </b>
            </span> <span class="reference-text"><cite class="citation news">Krazit, Tom (2003). <a rel="nofollow" class="external text" href="http://www.pcworld.com/article/111012/nvidias_benchmark_tactics_reassessed.html">"NVidia's Benchmark Tactics Reassessed"</a>. <i>IDG News</i>.</cite><span title="ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABenchmark+%28computing%29&amp;rft.atitle=NVidia%27s+Benchmark+Tactics+Reassessed&amp;rft.aufirst=Tom&amp;rft.aulast=Krazit&amp;rft.date=2003&amp;rft.genre=article&amp;rft_id=http%3A%2F%2Fwww.pcworld.com%2Farticle%2F111012%2Fnvidias_benchmark_tactics_reassessed.html&amp;rft.jtitle=IDG+News&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal" class="Z3988"><span >&nbsp;</span></span>
            </span>
          </li>
          <li id="cite_note-2"><span class="mw-cite-backlink"><b><a href="#cite_ref-2"><span class="cite-accessibility-label">Jump up </span>^</a>
            </b>
            </span> <span class="reference-text"><cite class="citation web">Castor, Kevin (2006). <a rel="nofollow" class="external text" href="http://donutey.com/hardwaretesting.php">"Hardware Testing and Benchmarking Methodology"</a><span class="reference-accessdate">. Retrieved <span class="nowrap">2008-02-24</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABenchmark+%28computing%29&amp;rft.aufirst=Kevin&amp;rft.aulast=Castor&amp;rft.btitle=Hardware+Testing+and+Benchmarking+Methodology&amp;rft.date=2006&amp;rft.genre=unknown&amp;rft_id=http%3A%2F%2Fdonutey.com%2Fhardwaretesting.php&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook" class="Z3988"><span >&nbsp;</span></span>
            </span>
          </li>
          <li id="cite_note-3"><span class="mw-cite-backlink"><b><a href="#cite_ref-3"><span class="cite-accessibility-label">Jump up </span>^</a>
            </b>
            </span> <span class="reference-text"><cite class="citation journal">Ehliar, Andreas; Liu, Dake. <a rel="nofollow" class="external text" href="http://www.da.isy.liu.se/pubs/ehliar/ehliar-ssocc2004.pdf">"Benchmarking network processors"</a> <span >(PDF)</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABenchmark+%28computing%29&amp;rft.atitle=Benchmarking+network+processors&amp;rft.aufirst=Andreas&amp;rft.aulast=Ehliar&amp;rft.au=Liu%2C+Dake&amp;rft.genre=article&amp;rft_id=http%3A%2F%2Fwww.da.isy.liu.se%2Fpubs%2Fehliar%2Fehliar-ssocc2004.pdf&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal" class="Z3988"><span >&nbsp;</span></span>
            </span>
          </li>
          <li id="cite_note-4"><span class="mw-cite-backlink"><b><a href="#cite_ref-4"><span class="cite-accessibility-label">Jump up </span>^</a>
            </b>
            </span> <span class="reference-text"><cite class="citation journal"><a rel="nofollow" class="external text" href="http://www.vmware.com.mx/pdf/VMmark_Rules_1.1.1_20080611-1.pdf">"VMmark Rules 1.1.1"</a> <span >(PDF)</span>. <i>VMWare</i>. 2008.</cite><span title="ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABenchmark+%28computing%29&amp;rft.atitle=VMmark+Rules+1.1.1&amp;rft.date=2008&amp;rft.genre=article&amp;rft_id=http%3A%2F%2Fwww.vmware.com.mx%2Fpdf%2FVMmark_Rules_1.1.1_20080611-1.pdf&amp;rft.jtitle=VMWare&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal" class="Z3988"><span >&nbsp;</span></span>
            </span>
          </li>
        </ol>
        <h2><span class="mw-headline" id="Further_reading">Further reading</span></h2>
        <ul>
          <li><cite class="citation book">Gray, Jim, ed. (1993). <i>The Benchmark Handbook for Database and Transaction Systems</i>. Morgan Kaufmann Series in Data Management Systems (2nd ed.). Morgan Kaufmann Publishers, Inc. <a href="/wiki/International_Standard_Book_Number" title="International Standard Book Number">ISBN</a>&nbsp;<a href="/wiki/Special:BookSources/1-55860-292-5" title="Special:BookSources/1-55860-292-5">1-55860-292-5</a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABenchmark+%28computing%29&amp;rft.btitle=The+Benchmark+Handbook+for+Database+and+Transaction+Systems&amp;rft.date=1993&amp;rft.edition=2nd&amp;rft.genre=book&amp;rft.isbn=1-55860-292-5&amp;rft.pub=Morgan+Kaufmann+Publishers%2C+Inc&amp;rft.series=Morgan+Kaufmann+Series+in+Data+Management+Systems&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook" class="Z3988"><span >&nbsp;</span></span>
          </li>
          <li><cite class="citation book">Scalzo, Bert; Kline, Kevin; Fernandez, Claudia; Burleson, Donald K.; <a href="/wiki/Mike_Ault" title="Mike Ault">Ault, Mike</a> (2007). <i>Database Benchmarking Practical Methods for Oracle &amp; SQL Server</i>. <a href="/wiki/International_Standard_Book_Number" title="International Standard Book Number">ISBN</a>&nbsp;<a href="/wiki/Special:BookSources/0-9776715-3-4" title="Special:BookSources/0-9776715-3-4">0-9776715-3-4</a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABenchmark+%28computing%29&amp;rft.au=Ault%2C+Mike&amp;rft.au=Burleson%2C+Donald+K.&amp;rft.au=Fernandez%2C+Claudia&amp;rft.aufirst=Bert&amp;rft.au=Kline%2C+Kevin&amp;rft.aulast=Scalzo&amp;rft.btitle=Database+Benchmarking+Practical+Methods+for+Oracle+%26+SQL+Server&amp;rft.date=2007&amp;rft.genre=book&amp;rft.isbn=0-9776715-3-4&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook" class="Z3988"><span >&nbsp;</span></span>
          </li>
          <li><cite class="citation book">Nambiar, Raghunath; Poess, Meikel, eds. (2009). <i>Performance Evaluation and Benchmarking</i>. Springer. <a href="/wiki/International_Standard_Book_Number" title="International Standard Book Number">ISBN</a>&nbsp;<a href="/wiki/Special:BookSources/978-3-642-10423-7" title="Special:BookSources/978-3-642-10423-7">978-3-642-10423-7</a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABenchmark+%28computing%29&amp;rft.btitle=Performance+Evaluation+and+Benchmarking&amp;rft.date=2009&amp;rft.genre=book&amp;rft.isbn=978-3-642-10423-7&amp;rft.pub=Springer&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook" class="Z3988"><span >&nbsp;</span></span>
          </li>
        </ul>
        <h2><span class="mw-headline" id="External_links">External links</span></h2>
        <ul>
          <li><a rel="nofollow" class="external text" href="news:comp.benchmarks">benchmark newsgroup</a> </li>
          <li><a rel="nofollow" class="external text" href="http://www.forum-inside.de/cgi-bin/forum/benchmark_e.cgi">3DMark Vantage, 3DMark06, 3DMark05, 3DMark03, 3DMark01, Aquamark and Super PI benchmark database</a> </li>
          <li><a rel="nofollow" class="external text" href="http://lbs.sourceforge.net/">Linux benchmark suite</a> </li>
          <li><a rel="nofollow" class="external text" href="http://www.netlib.org/">Open source benchmark programs</a> </li>
          <li><a rel="nofollow" class="external text" href="http://hwbot.org/">A site dedicated to benchmarking and overclocking of CPUs and GPUs.</a> </li>
          <li><a rel="nofollow" class="external text" href="https://www.cpubenchmark.net/">CPUbenchmark.net</a> - A decent online CPU benchmarking site for laymen separating performance overall from performance per dollar spent.</li>
        </ul>
      </div>
      <div class="printfooter"> Retrieved from "<a dir="ltr" href="https://en.wikipedia.org/w/index.php?title=Benchmark_(computing)&amp;oldid=718242759">https://en.wikipedia.org/w/index.php?title=Benchmark_(computing)&amp;oldid=718242759</a>" </div>
      <div id="catlinks" class="catlinks" data-mw="interface">
        <div id="mw-normal-catlinks" class="mw-normal-catlinks"><a href="/wiki/Help:Category" title="Help:Category">Categories</a>:
          <ul>
            <li><a href="/wiki/Category:Computer_benchmarks" title="Category:Computer benchmarks">Computer benchmarks</a> </li>
          </ul>
        </div>
        <div id="mw-hidden-catlinks" class="mw-hidden-catlinks mw-hidden-cats-hidden">Hidden categories:
          <ul>
            <li><a href="/wiki/Category:Articles_needing_additional_references_from_July_2015" title="Category:Articles needing additional references from July 2015">Articles needing additional references from July 2015</a> </li>
            <li><a href="/wiki/Category:All_articles_needing_additional_references" title="Category:All articles needing additional references">All articles needing additional references</a> </li>
            <li><a href="/wiki/Category:All_articles_with_unsourced_statements" title="Category:All articles with unsourced statements">All articles with unsourced statements</a> </li>
            <li><a href="/wiki/Category:Articles_with_unsourced_statements_from_August_2011" title="Category:Articles with unsourced statements from August 2011">Articles with unsourced statements from August 2011</a> </li>
            <li><a href="/wiki/Category:Wikipedia_external_links_cleanup_from_October_2013" title="Category:Wikipedia external links cleanup from October 2013">Wikipedia external links cleanup from October 2013</a> </li>
            <li><a href="/wiki/Category:Wikipedia_spam_cleanup_from_October_2013" title="Category:Wikipedia spam cleanup from October 2013">Wikipedia spam cleanup from October 2013</a> </li>
          </ul>
        </div>
      </div>
      <div class="visualClear"></div>
    </div>
  </div>
  `;
}
