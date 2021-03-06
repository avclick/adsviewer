COMMENT ON TABLE public.carbody IS 'Справочник названий кузовов';
COMMENT ON COLUMN public.carbody.name IS 'Название в объявлении';
COMMENT ON COLUMN public.carbody.code IS 'Код в запросах';
COMMENT ON COLUMN public.carbody.avitocode IS 'Идентификатор на сайте avito';
COMMENT ON TABLE public.carmanufacturer IS 'Справочник фирм-производителей автомобилей';
COMMENT ON COLUMN public.carmanufacturer.name IS 'Название в объявлении';
COMMENT ON COLUMN public.carmanufacturer.code IS 'Код в запросах';
COMMENT ON COLUMN public.carmanufacturer.avitocode IS 'Идентификатор на сайте avito';
COMMENT ON TABLE public.carmodel IS 'Справочник моделей автомобилей';
COMMENT ON COLUMN public.carmodel.carmanufacturerid IS 'id в carManufacturer';
COMMENT ON COLUMN public.carmodel.name IS 'Название в объявлении';
COMMENT ON COLUMN public.carmodel.code IS 'Код в запросах';
COMMENT ON COLUMN public.carmodel.carbodyid IS 'id в carBody, наиболее популярное значение по модели';
COMMENT ON COLUMN public.carmodel.cartransmissionid IS 'id в carTransmission, наиболее популярное значение по модели';
COMMENT ON COLUMN public.carmodel.enginecapacity IS 'enginePower, медиана по модели';
COMMENT ON COLUMN public.carmodel.enginepower IS 'engineCapacity, медиана по модели';
COMMENT ON COLUMN public.carmodel.avitocode IS 'Идентификатор на сайте avito';
COMMENT ON TABLE public.carmodelbody IS 'Справочник кузовов моделей';
COMMENT ON COLUMN public.carmodelbody.carmodelid IS 'id в carModel';
COMMENT ON COLUMN public.carmodelbody.carbodyid IS 'id в carBody';
COMMENT ON TABLE public.carmodeltransmission IS 'Справочник КПП моделей';
COMMENT ON COLUMN public.carmodeltransmission.carmodelid IS 'id в carModel';
COMMENT ON COLUMN public.carmodeltransmission.cartransmissionid IS 'id в carTransmission';
COMMENT ON TABLE public.cartransmission IS 'Справочник названий КПП';
COMMENT ON COLUMN public.cartransmission.name IS 'название в обьявлении';
COMMENT ON COLUMN public.cartransmission.code IS 'код в запросах';
COMMENT ON COLUMN public.cartransmission.avitocode IS 'Идентификатор на сайте avito';
COMMENT ON TABLE public.region IS 'Регионы РФ';
COMMENT ON COLUMN public.region.id IS 'идентификатор PK';
COMMENT ON COLUMN public.region.code IS 'идентификатор для URL';
COMMENT ON COLUMN public.region.name IS 'название';
COMMENT ON COLUMN public.region.active IS 'признак присутствия в регионе';
COMMENT ON COLUMN public.region.kladrcode IS 'код региона по КЛАДР';
