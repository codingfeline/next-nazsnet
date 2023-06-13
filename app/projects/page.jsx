'use client'
import { increment, useSelector, useDispatch, useState, Fragment, Dialog, Transition } from '@components'

const Projects = () => {
  const count = useSelector(state => state.counter.value)
  const journals = useSelector(state => state.journal.value)
  const dispatch = useDispatch()

  return (
    <>
      <h2>projects</h2>
      <h3>count: {count}</h3>
      <button onClick={() => dispatch(increment())}>increment</button>
      {/* <p>{JSON.stringify(journals)}</p> */}

      <p className="hidden">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut reprehenderit quos nulla aliquid sint
        quam architecto voluptas ex, dolore nesciunt laudantium, natus, nemo placeat numquam minima ipsa
        quidem dicta fugit blanditiis est maxime temporibus assumenda. Asperiores, distinctio omnis
        voluptatibus maxime praesentium impedit pariatur dolore molestias. Exercitationem consectetur ipsa
        enim reprehenderit minima sunt obcaecati praesentium nesciunt impedit! Nobis aperiam minus,
        praesentium aliquam ipsa tenetur veniam illo repellat earum corrupti natus id fuga, obcaecati culpa
        veritatis illum adipisci possimus itaque a nihil labore. Dolores quis recusandae eos obcaecati at
        dolorem corporis ut natus, doloribus optio fugiat a. Ipsa, nihil. Magni modi atque, est libero
        voluptate sunt architecto, ipsam soluta alias sequi nisi dolorum consequatur quasi blanditiis porro?
        Adipisci mollitia corporis aliquam reiciendis neque beatae dicta non omnis quasi, esse veniam facere
        tenetur quia nam inventore atque dignissimos ipsum. Quis delectus et corrupti alias id nemo maxime
        error similique, beatae deserunt magnam soluta omnis dolorem pariatur exercitationem ducimus
        laboriosam numquam perspiciatis doloremque voluptatem recusandae. Ducimus officia fugit cum dolorum
        accusantium inventore illo? Sit commodi totam animi, hic minus amet nihil quis aperiam suscipit fuga
        maiores, repellendus tempore reprehenderit optio sapiente minima rem ipsam consectetur sed dolorem
        velit magni! A animi consequuntur rerum distinctio quo illo explicabo quisquam expedita mollitia nobis
        ipsam quia voluptatem repudiandae reprehenderit amet laudantium minima, ut quasi nisi dignissimos
        facere exercitationem. Reprehenderit quasi blanditiis, eum sit voluptatibus nesciunt laboriosam, rem
        omnis aspernatur similique a cum architecto dolorum incidunt voluptates voluptatem obcaecati ipsa. Sit
        ea expedita ipsa maxime ratione molestiae perspiciatis doloremque minus reprehenderit, quam nam
        possimus hic cum nostrum error autem. Tenetur, quidem. Quis quia placeat cum quos, laudantium tenetur
        sunt nihil autem minima optio soluta doloribus exercitationem labore magni mollitia sit, blanditiis
        maiores culpa iste, ab consequatur non ea necessitatibus amet. Aliquam earum molestias nulla quaerat
        excepturi modi corrupti iusto voluptatum hic neque obcaecati in qui doloribus deleniti, quod vel
        minima recusandae maiores voluptatem voluptates impedit eos quisquam! Itaque beatae sunt, esse
        assumenda ratione natus laboriosam dignissimos molestias est quaerat, maiores, nisi optio veritatis.
        Eum voluptatem officiis et assumenda rerum fuga quis soluta corrupti suscipit numquam facere, nobis
        delectus mollitia illo nemo repellendus recusandae laudantium in ipsa cum, quos libero! Minus soluta
        sit accusamus, reprehenderit totam maxime repellat voluptates quasi deleniti fuga? Tempore eaque animi
        eligendi odit. Quam provident sunt itaque voluptatem earum, tempore quae voluptatibus consequatur
        tempora, porro soluta, accusamus quaerat eligendi magni. Voluptatibus molestias vel excepturi culpa
        cupiditate unde, natus omnis a est amet ipsa quisquam eligendi consequatur atque quos cumque voluptate
        accusantium, eius minus perspiciatis nobis ex maiores! Delectus laboriosam ipsa rem, facilis veritatis
        quis ducimus modi nihil nam reprehenderit architecto ex voluptate minima porro iure totam suscipit
        debitis, itaque ipsam alias, explicabo quaerat? Tempora impedit magni dolorem expedita quisquam optio
        ex nihil omnis necessitatibus deleniti rem inventore enim, minus officia aut saepe nisi quos corporis
        ad autem. Ratione tenetur et iure velit quis porro autem perspiciatis, labore numquam quas? Temporibus
        inventore non reiciendis soluta totam, illum odio cum culpa dolorum suscipit exercitationem quod
        sapiente eveniet consectetur hic? Voluptatem rem error assumenda cumque molestias numquam nisi
        reiciendis quas, itaque officia quidem dolorem tempora officiis est dolore iure fugiat, explicabo
        aliquam placeat veritatis! Quod sapiente odio natus soluta quas? Nam nihil voluptas quis similique
        dolore perferendis cupiditate quaerat deserunt dicta! Nulla omnis sunt deserunt saepe cum corrupti ex
        ut, dicta eaque et, molestias dolorum eum veniam, rerum tenetur voluptatem consequatur excepturi
        laboriosam quaerat iste quam ratione delectus perspiciatis quis. Pariatur architecto odio, unde illo
        corporis rem impedit quo optio corrupti quod quisquam velit fugiat rerum, doloremque porro deserunt
        minima fugit distinctio recusandae eos ratione incidunt laborum? Commodi.
      </p>
    </>
  )
}

export default Projects
