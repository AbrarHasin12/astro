import { useState } from "react";

const Article = ({
  element,
  lineClamp,
  title,
  lineHeight,
  lineAlignment,
  circleAlignment,
}) => {
  const [value, setValue] = useState(0);

  const increment = () => setValue(value + 1);
  return (
    <section className="bg-[#E4BEA4] m-0 article ">
      <div>
        {element}
        <div className={`rect-article ${circleAlignment}`}>
          <div className="circle"></div>
        </div>
      </div>

      <div className="m-2">
        <h2 className={`text-2xl my-4 mx-2 md:text-3xl ${lineAlignment}`}>
          {title}
        </h2>
        <p
          className="cutOff-text text-justify"
          style={{
            WebkitLineClamp: lineClamp,
            maxHeight: `calc(${lineClamp} * 1em * ${lineHeight})`,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          vitae facilis provident aut fugiat dolor eveniet. Libero aut alias
          sapiente quas non iure! At, nisi. Soluta, adipisci. Velit rerum minus
          ea animi asperiores quam, molestiae facere iure, cumque debitis
          doloribus veniam illo nemo praesentium repellendus perferendis sunt
          dolor labore corporis maiores quibusdam aperiam sapiente! Provident
          explicabo ullam mollitia harum illo sapiente qui facilis voluptate
          laudantium autem inventore assumenda odit, eum ad quibusdam iure
          dolorem non, similique quos minus ab veritatis impedit recusandae cum.
          Odio incidunt harum consequatur quod modi voluptate, nostrum
          asperiores aspernatur culpa, et ratione aut possimus quis. Recusandae
          hic, explicabo consequatur eaque deleniti quam voluptate ipsa animi
          perspiciatis corrupti, voluptatum quaerat sed quibusdam, sapiente
          temporibus! Ab magni nihil vitae est laudantium laboriosam dolorum
          sunt ipsam quidem perspiciatis eligendi, commodi sed impedit
          praesentium quae dolor. Iste obcaecati et dolore fugiat deserunt,
          molestias nam perspiciatis est accusantium voluptatem nobis facere
          possimus doloribus corporis repellendus quos nostrum excepturi, illum
          ut neque magnam optio incidunt dicta. Illo quod iusto minima eveniet
          repudiandae distinctio quis ab quaerat. Vero excepturi aliquam
          architecto eaque cum officiis, explicabo labore modi voluptates ullam,
          nisi eos, incidunt nemo nesciunt culpa facere! Sint officia neque
          nesciunt, minus eligendi quibusdam.
        </p>
      </div>

      <div className="m-4 grid gap-3">
        <div className="flex justify-around">
          <button className="article-btns rounded-xl px-2 md:px-10 lg:px-14">
            read
          </button>
          <button
            className="article-btns rounded-full px-3"
            onClick={increment}
          >
            {value}
          </button>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="77"
            height="76"
            viewBox="0 0 77 76"
            className="w-8 h-8"
          >
            <g
              id="Group_131"
              data-name="Group 131"
              transform="translate(-670 -3386)"
            >
              <rect
                id="Rectangle_79"
                data-name="Rectangle 79"
                width="77"
                height="76"
                rx="38"
                transform="translate(670 3386)"
                fill="#c5a38d"
              />
              <g
                id="Union_4"
                data-name="Union 4"
                transform="translate(758 2194)"
                fill="none"
              >
                <path
                  d="M-53.333,1240H-70v-28h42v28h-6.667L-44,1256Z"
                  stroke="none"
                />
                <path
                  d="M -43.99998474121094 1248.061889648438 L -36.96397018432617 1236.000244140625 L -31.99989891052246 1236.000244140625 L -31.99989891052246 1216.000366210938 L -66.00019836425781 1216.000366210938 L -66.00019836425781 1236.000244140625 L -51.03556060791016 1236.000244140625 L -43.99998474121094 1248.061889648438 M -44.00009918212891 1256.00048828125 L -53.33309936523438 1240.000244140625 L -70.00019836425781 1240.000244140625 L -70.00019836425781 1212.000366210938 L -27.99989891052246 1212.000366210938 L -27.99989891052246 1240.000244140625 L -34.66650009155273 1240.000244140625 L -44.00009918212891 1256.00048828125 Z"
                  stroke="none"
                  fill="#383336"
                />
              </g>
            </g>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="77"
            height="76"
            viewBox="0 0 77 76"
            className="w-8 h-8"
          >
            <g
              id="Group_132"
              data-name="Group 132"
              transform="translate(-766 -3386)"
            >
              <rect
                id="Rectangle_78"
                data-name="Rectangle 78"
                width="77"
                height="76"
                rx="38"
                transform="translate(766 3386)"
                fill="#c5a38d"
              />
              <g
                id="Union_3"
                data-name="Union 3"
                transform="translate(854.651 2195)"
                fill="none"
              >
                <path
                  d="M-68.036,1231.087a10.558,10.558,0,0,1-1.542-1.707l-.78-.863h.225a8.745,8.745,0,0,1-1.171-4.352c0-5.589,5.409-10.119,12.082-10.119a12.935,12.935,0,0,1,9.757,4.15,12.557,12.557,0,0,1,8.855-3.459c6.411,0,11.609,4.384,11.609,9.791a8.48,8.48,0,0,1-1,3.989h.278l-.852.943a10.214,10.214,0,0,1-1.722,1.906L-50.042,1251Z"
                  stroke="none"
                />
                <path
                  d="M -59.22127151489258 1218.046875 C -61.51116180419922 1218.046875 -63.63317108154297 1218.767944335938 -65.19642639160156 1220.077270507812 C -66.55513000488281 1221.215209960938 -67.30340576171875 1222.667358398438 -67.30340576171875 1224.166015625 C -67.30340576171875 1224.986450195312 -67.0858154296875 1225.784545898438 -66.65670776367188 1226.537841796875 L -66.48802185058594 1226.833984375 L -66.4608154296875 1226.864135742188 L -66.33078002929688 1227.044921875 C -66.06089782714844 1227.420166015625 -65.73823547363281 1227.7763671875 -65.37176513671875 1228.103515625 L -65.21176910400391 1228.246337890625 L -65.06797790527344 1228.405517578125 L -50.04178237915039 1245.034301757812 L -35.10255432128906 1228.501831054688 L -34.91561126708984 1228.34033203125 C -34.50624847412109 1227.986572265625 -34.15313720703125 1227.59716796875 -33.86608123779297 1227.182861328125 L -33.71913909912109 1226.970825195312 L -33.69910430908203 1226.948608398438 L -33.53849792480469 1226.645385742188 C -33.180908203125 1225.97021484375 -32.99960327148438 1225.258178710938 -32.99960327148438 1224.52880859375 C -32.99960327148438 1223.112670898438 -33.70249176025391 1221.739990234375 -34.97879791259766 1220.66357421875 C -36.45114135742188 1219.421875 -38.45063018798828 1218.738037109375 -40.60895156860352 1218.738037109375 C -42.97603225708008 1218.738037109375 -45.17594146728516 1219.575073242188 -46.64461135864258 1221.034423828125 L -49.67026138305664 1224.040893554688 L -52.47647094726562 1220.82861328125 C -53.99811935424805 1219.086791992188 -56.51953887939453 1218.046875 -59.22127151489258 1218.046875 M -59.22127151489258 1214.046875 C -55.21384048461914 1214.046875 -51.66209030151367 1215.680908203125 -49.46405029296875 1218.197021484375 C -47.33460998535156 1216.0810546875 -44.15777206420898 1214.738037109375 -40.60895156860352 1214.738037109375 C -34.19762420654297 1214.738037109375 -28.99960327148438 1219.121826171875 -28.99960327148438 1224.52880859375 C -28.99960327148438 1225.949340820312 -29.35851287841797 1227.299438476562 -30.00367736816406 1228.517578125 L -29.72575378417969 1228.517578125 L -30.57823181152344 1229.461059570312 C -31.05924987792969 1230.1552734375 -31.63864898681641 1230.795166015625 -32.30037689208984 1231.366943359375 L -50.04179000854492 1251.00048828125 L -68.03581237792969 1231.087280273438 C -68.61837005615234 1230.567138671875 -69.13612365722656 1229.994995117188 -69.57803344726562 1229.380615234375 L -70.35783386230469 1228.517578125 L -70.1324462890625 1228.517578125 C -70.88322448730469 1227.199462890625 -71.30339813232422 1225.723876953125 -71.30339813232422 1224.166015625 C -71.30339813232422 1218.577392578125 -65.89445495605469 1214.046875 -59.22127151489258 1214.046875 Z"
                  stroke="none"
                  fill="#383336"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Article;
